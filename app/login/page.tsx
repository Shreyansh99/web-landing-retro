import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Auth from '@/components/Auth'

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Account Access</h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Sign in to your account or create a new one to access exclusive features.
          </p>
          
          <Auth />
        </div>
      </main>
      <Footer />
    </>
  )
}
