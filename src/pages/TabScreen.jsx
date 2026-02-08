import React from 'react'
import Tabs from '../components/common/Tabs'

const TabScreen = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        User Settings
      </h1>

      <Tabs defaultValue="profile">


        <Tabs.Panel value="profile">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Edit Your Profile
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Save Changes
            </button>
          </form>
        </Tabs.Panel>

        <Tabs.Panel value="password">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Change Password
          </h2>
          <form className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Update Password
            </button>
          </form>
        </Tabs.Panel>

        <Tabs.Panel value="notifications">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Notification Settings
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
              <span className="text-gray-700">Email notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
              <span className="text-gray-700">Push notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
              <span className="text-gray-700">SMS notifications</span>
            </label>
          </div>
        </Tabs.Panel>

                <Tabs.List>
          <Tabs.Tab value="profile">Profile</Tabs.Tab>
          <Tabs.Tab value="password">Password</Tabs.Tab>
          <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  )
}

export default TabScreen

{/* <Tabs
  defaultValue="profile"
  tabs={[
    {
      value: "profile",
      label: "Profile",
      content: <ProfileForm />
    },
    {
      value: "password",
      label: "Password",
      content: <PasswordForm />
    },
    {
      value: "notifications",
      label: "Notifications",
      content: <NotificationSettings />
    }
  ]}
/> */}
