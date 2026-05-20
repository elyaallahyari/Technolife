import SidebarMenu from '@/app/_components/dashboard/SidebarMenu'

export default function DashboardLayout({ children }) {
  return (
    <div className='p-14'>
      <aside>
        <SidebarMenu />
      </aside>

      <div>{children}</div>
    </div>
  )
}
