import { useAppSelector } from "../../../app/hooks/storeHooks"

export const HomePage = () => {
  // const {username}  = useAppSelector(state => state.auth);
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#F9F9FA',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      Drag CSV file 
    </div>
  )
}
