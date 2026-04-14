import { useAppSelector } from "../../../app/hooks/storeHooks"
import { Loader } from "../../atoms/Loader/Loader";
import { DropFileBox } from "../../organisms/dashboard/DropFileBox"
import { PasswordsTable } from "../../organisms/dashboard/PasswordsTable";
import { CheckPasswordsButton } from "../../atoms/Buttons/CheckPasswordsButton";



export const HomePage = () => {
  const { loading, passwords } = useAppSelector(state => state.app);
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#E2EDF9',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {
        loading ?
          <Loader /> :
          passwords.length > 0 ?
            <>
              <div className="flex flex-col items-center gap-2">
                <PasswordsTable passwords={passwords} />
                <CheckPasswordsButton />
              </div>
            </>
            :
            <DropFileBox />
      }
    </div>
  )
}
