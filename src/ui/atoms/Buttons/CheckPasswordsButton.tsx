import { Button } from "@heroui/react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks/storeHooks";
import { StartCheckingPasswords } from "../../../store/app/appThunks";

export const CheckPasswordsButton = () => {

    const { passwords } = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(StartCheckingPasswords(passwords));
    }

    return (
        <Button onClick={handleClick}>Check passwords</Button>
    )
}
