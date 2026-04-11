import { useAppSelector } from "../../../app/hooks/storeHooks"
import { DropFileBox } from "../../organisms/dashboard/DropFileBox"



export const HomePage = () => {
  // const {username}  = useAppSelector(state => state.auth);
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
      <DropFileBox />
    </div>
  )
}
