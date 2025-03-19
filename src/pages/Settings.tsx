
import React, { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import ToggleSwitch from '@/components/ToggleSwitch';
import { Search, Check, User, Mail, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [user, setUser] = useState({
    firstName: 'Alexis',
    lastName: 'Ohanian',
    email: 'alexis@pandemicnet.io',
    role: 'Founder',
    country: 'United States',
    language: 'English',
    timezone: 'UTC-8 (Pacific Time)',
    twoFactor: false,
    passwordExpiry: true,
    notifications: {
      email: true,
      sms: false,
      productUpdates: true,
      securityAlerts: true,
      marketingEmails: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (name: string, value: boolean) => {
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setUser(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your profile settings have been updated successfully.",
      duration: 3000,
    });
  };

  const handleAddEmail = () => {
    toast({
      title: "Add new email",
      description: "Feature to add additional email will be implemented soon.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-800">Settings</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input 
                className="pl-10 pr-4 py-2 w-64 text-sm rounded-full bg-gray-50 border-gray-200 focus:bg-white"
                placeholder="Search features..." 
              />
            </div>
          </div>

          {/* User profile */}
          <div className="p-6 border-b border-gray-200 animate-slideInFromTop">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                  <User className="h-8 w-8" />
                </Avatar>
                <div>
                  <h2 className="text-lg font-medium">{user.firstName} {user.lastName}</h2>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
              <Button className="btn-primary">
                <Check className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 space-y-8">
            {/* Personal information */}
            <section className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country" className="form-label">Country</label>
                  <Select>
                    <select 
                      id="country"
                      className="form-select"
                      value={user.country}
                      onChange={(e) => handleSelectChange('country', e.target.value)}
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </Select>
                </div>
                <div className="form-group">
                  <label htmlFor="language" className="form-label">Language</label>
                  <Select>
                    <select 
                      id="language"
                      className="form-select"
                      value={user.language}
                      onChange={(e) => handleSelectChange('language', e.target.value)}
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Chinese">Chinese</option>
                    </select>
                  </Select>
                </div>
                <div className="form-group">
                  <label htmlFor="timezone" className="form-label">Time Zone</label>
                  <Select>
                    <select 
                      id="timezone"
                      className="form-select"
                      value={user.timezone}
                      onChange={(e) => handleSelectChange('timezone', e.target.value)}
                    >
                      <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
                      <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
                      <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
                      <option value="UTC+1 (Central European Time)">UTC+1 (Central European Time)</option>
                      <option value="UTC+8 (China Standard Time)">UTC+8 (China Standard Time)</option>
                    </select>
                  </Select>
                </div>
              </div>
            </section>

            {/* Email addresses */}
            <section className="space-y-4">
              <h3 className="text-lg font-medium">My email address</h3>
              
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span>{user.email}</span>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Primary</span>
              </div>
              
              <Button variant="outline" className="text-sm" onClick={handleAddEmail}>
                + Add email address
              </Button>
            </section>

            {/* Password and authentication */}
            <section className="space-y-4">
              <h3 className="text-lg font-medium">Password and authentication</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium">Change Password</h4>
                    <p className="text-sm text-gray-500">Update your password regularly</p>
                  </div>
                  <Button variant="outline" className="text-sm">
                    Update password
                  </Button>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <ToggleSwitch 
                    enabled={user.twoFactor} 
                    onChange={(value) => handleToggleChange('twoFactor', value)} 
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium">Password Expiry</h4>
                    <p className="text-sm text-gray-500">Force password reset every 90 days</p>
                  </div>
                  <ToggleSwitch 
                    enabled={user.passwordExpiry} 
                    onChange={(value) => handleToggleChange('passwordExpiry', value)} 
                  />
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="space-y-4">
              <h3 className="text-lg font-medium">Notifications & alerts</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Bell size={18} className="text-gray-500" />
                    <span>Email Notifications</span>
                  </div>
                  <ToggleSwitch 
                    enabled={user.notifications.email} 
                    onChange={(value) => handleToggleChange('notifications.email', value)} 
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Bell size={18} className="text-gray-500" />
                    <span>SMS Alerts</span>
                  </div>
                  <ToggleSwitch 
                    enabled={user.notifications.sms} 
                    onChange={(value) => handleToggleChange('notifications.sms', value)} 
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Bell size={18} className="text-gray-500" />
                    <span>Product Updates</span>
                  </div>
                  <ToggleSwitch 
                    enabled={user.notifications.productUpdates} 
                    onChange={(value) => handleToggleChange('notifications.productUpdates', value)} 
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Bell size={18} className="text-gray-500" />
                    <span>Security Alerts</span>
                  </div>
                  <ToggleSwitch 
                    enabled={user.notifications.securityAlerts} 
                    onChange={(value) => handleToggleChange('notifications.securityAlerts', value)} 
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Bell size={18} className="text-gray-500" />
                    <span>Marketing Emails</span>
                  </div>
                  <ToggleSwitch 
                    enabled={user.notifications.marketingEmails} 
                    onChange={(value) => handleToggleChange('notifications.marketingEmails', value)} 
                  />
                </div>
              </div>
            </section>

            <div className="pt-4 flex justify-end">
              <Button className="btn-primary" onClick={handleSave}>
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
