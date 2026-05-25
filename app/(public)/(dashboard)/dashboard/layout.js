import SidebarDashboard from '@/app/_components/ui/SidebarDashboard'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row items-center justify-around p-14 bg-[#fcfeff] w-full h-full gap-7">
      <aside>
        <SidebarDashboard />
      </aside>

      <div className="border border-[#f0f0f0] bg-white p-4 mx-auto max-w-screen rounded w-full h-full min-h-100">
        {children}
      </div>
    </div>
  )
}
