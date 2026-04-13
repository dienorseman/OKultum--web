import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPasswords, switchLoading } from "./appSlice";

import Papa from 'papaparse'
import type { Password } from "../../app/models/password";


export const ParseAndSetPasswords = createAsyncThunk(
    'parseAnsSetPasswords',
    (file: File, { dispatch} ) => {
        dispatch(switchLoading());
        Papa.parse(file, {
            header: false,
            skipEmptyLines: true,
            complete: (results) => {
                const data = results.data as string[][]
                const formattedData: Password[] = data.slice(2).map( passwordEntry => ({
                    id: passwordEntry[5],
                    url: passwordEntry[0],
                    username: passwordEntry[1],
                    password: passwordEntry[2],
                    createdAt: passwordEntry[6],
                    lastTimeUsed: passwordEntry[7],
                    lastTimeChanged: passwordEntry[8]
                }))
                dispatch(setPasswords(formattedData))
            }
        })
    }
);