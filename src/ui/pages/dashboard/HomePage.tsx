import { useAppSelector } from "../../../app/hooks/storeHooks"
import { Loader } from "../../atoms/Loader/Loader";
import { DropFileBox } from "../../organisms/dashboard/DropFileBox"



export const HomePage = () => {
  const { loading } = useAppSelector(state => state.app);
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
          <DropFileBox />
      }
    </div>
  )
}
