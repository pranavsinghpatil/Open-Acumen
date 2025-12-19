import { ChatInterface } from '@/components/chat/chat-interface'
import { SideNav } from '@/components/layout/side-nav'

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <SideNav />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <ChatInterface />
        </div>
      </main>
    </div>
  )
}
