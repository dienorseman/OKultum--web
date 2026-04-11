
import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from '../../ui/pages/dashboard/HomePage'
export const AppRouter = () => {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>

}
