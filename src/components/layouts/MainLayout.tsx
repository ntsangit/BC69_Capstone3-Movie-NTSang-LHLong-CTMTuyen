// rafc
import { Header } from '../ui'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div>
            <Header />
            <main className="mt-[80px]">
                <Outlet />
            </main>

            {/* Footer */}
        </div>
    )
}
