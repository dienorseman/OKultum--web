import { useAppSelector } from "../../../app/hooks/storeHooks"
import { Loader } from "../../atoms/Loader/Loader";
import { DropFileBox } from "../../organisms/dashboard/DropFileBox"
import { PasswordsTable } from "../../organisms/dashboard/PasswordsTable";
import { CheckPasswordsButton } from "../../atoms/Buttons/CheckPasswordsButton";

// lopues logo
import lopuslogo from '../../../assets/lopuslab-logo-nobg.png';

export const HomePage = () => {
  const { loading, passwords } = useAppSelector(state => state.app);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#E2EDF9',
        width: '100%',
        alignItems: 'center',
        overflow: 'scroll'
      }}
    >
      {/* Contenedor central que ocupa todo el espacio disponible */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '80px',
          width: '100%',
        }}
      >
        {loading ? (
          <Loader />
        ) : passwords.length > 0 ? (
          <div className="flex flex-col items-center gap-2">
            <PasswordsTable passwords={passwords} />
            <CheckPasswordsButton />
          </div>
        ) : (
          <DropFileBox />
        )}
      </div>
      <div
        style={{
          display: 'flex',
          height: '100px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px'
        }}
      >
        <p>Developed by </p>
        <img src={lopuslogo} alt="LopusLabLogo" style={{
          height: '100px',
          width: '100px',
          objectFit: 'cover'
        }} />
      </div>
    </div>
  )
}