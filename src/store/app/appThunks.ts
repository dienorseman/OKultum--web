import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPasswords, switchLoading } from "./appSlice";
import Papa from 'papaparse'
import type { Password } from "../../app/models/password";
import { zxcvbn } from "@zxcvbn-ts/core";
import { checkPwnedPassword } from "../../utils/checkBreach";


export const ParseAndSetPasswords = createAsyncThunk(
    'parseAnsSetPasswords',
    async (file: File, { dispatch }) => {
        dispatch(switchLoading());
        Papa.parse(file, {
            header: false,
            skipEmptyLines: true,
            complete: (results) => {
                const data = results.data as string[][];
                const formattedData: Password[] = data.slice(2).map(passwordEntry => ({
                    id: passwordEntry[5],
                    url: passwordEntry[0],
                    username: passwordEntry[1],
                    password: passwordEntry[2],
                    createdAt: passwordEntry[6],
                    lastTimeUsed: passwordEntry[7],
                    lastTimeChanged: passwordEntry[8],
                    breaches: undefined,
                    securityScore: zxcvbn(passwordEntry[2]).score + 1
                }))
                dispatch(setPasswords(formattedData))
            }
        })
    }
);


export const StartCheckingPasswords = createAsyncThunk(
    'startCheckingPasswords',
    async (passwords: Password[], { dispatch }) => {
        dispatch(switchLoading());
        const updatedPasswords = [];
        for (const pwd of passwords) {
            try {
                const count = await checkPwnedPassword(pwd.password);
                updatedPasswords.push({
                    ...pwd,
                    breaches: count
                });
            } catch (error) {
                console.log(error)
                updatedPasswords.push({
                    ...pwd,
                breaches: undefined
                });
            }
        }
        dispatch(setPasswords(updatedPasswords));
        return updatedPasswords;
    }
);