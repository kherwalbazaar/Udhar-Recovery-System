'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, Bell, Home, Users, TrendingDown, CheckCircle2, Link2, Calendar, User2, X, Wallet, Edit2, Phone, User, FileText, Zap, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function KherwalBazaar() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [customers] = useState([
    { id: 1, name: 'Balakram Tudu', phone: '+91 9583252256', amount: 500, status: 'Active', collection: 'Track Pants' },
    { id: 2, name: 'Rajesh Kumar', phone: '+91 9876543210', amount: 1000, status: 'Active', collection: 'Mobile Phone' },
  ]);
  const [collections] = useState([
    { id: 1, date: '28/04/26', customer: 'Balakram Tudu', amount: 150, status: 'Completed', method: 'UPI' },
    { id: 2, date: '27/04/26', customer: 'Rajesh Kumar', amount: 200, status: 'Completed', method: 'NACH' },
  ]);
  const [formData, setFormData] = useState({
    customerPhone: '',
    customerName: '',
    collectionItem: '',
    collectionType: 'installments',
    frequency: 'monthly',
    numInstallments: '6',
    startDate: '',
    paymentMethod: 'upi',
    penaltyOption: 'no-penalty',
    totalAmount: 500,
  });

  const renderDashboard = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Total Pending Card */}
      <div className="px-6 pt-4 pb-6">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-4 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-300 mb-2">Total Outstanding</p>
              <h3 className="text-3xl font-bold mb-4">₹ 1,87,500</h3>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4" />
                <span>1250 Customers</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-blue-500 rounded-full p-3">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-sm text-gray-300">View Details</span>
                <span className="text-lg">›</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 pb-6">
        <h3 className="text-sm font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-4">
          <button onClick={() => { setActiveTab('add'); }} className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition">
              <User2 className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-semibold text-center text-gray-900">Add New Udhar</p>
          </button>
          <button onClick={() => { console.log('Payment Link button clicked'); }} className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-10 h-10 bg-purple-500 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-semibold text-center text-gray-900">Payment Link</p>
          </button>
          <button onClick={() => { console.log('EMI Plans button clicked'); }} className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-semibold text-center text-gray-900">EMI Plans</p>
          </button>
          <button onClick={() => { setActiveTab('khata'); }} className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition">
              <Users className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-semibold text-center text-gray-900">Khata</p>
          </button>
          <button onClick={() => { setActiveTab('collections'); }} className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-semibold text-center text-gray-900">Collections</p>
          </button>
          <button onClick={() => { console.log('Reminder button clicked'); }} className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-10 h-10 bg-red-500 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-semibold text-center text-gray-900">Reminder</p>
          </button>
        </div>
      </div>

      {/* Auto Collection Banner */}
      <div className="px-6 pb-6">
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 flex gap-4">
          <div className="flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-green-900">Auto Collection Active</h4>
            <p className="text-sm text-green-800 mt-1">Payments will be collected automatically as per schedule.</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap hover:bg-green-700">
            View ›
          </button>
        </div>
      </div>

      {/* Today's Summary */}
      <div className="px-6 pb-6 mb-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Today&apos;s Summary</h3>
          <a href="#" className="text-blue-600 text-sm font-semibold">Report</a>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">📥</div>
            <p className="text-lg font-bold text-gray-900">₹ 12,450</p>
            <p className="text-xs text-gray-600 mt-2">Collected Today</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">👤</div>
            <p className="text-lg font-bold text-gray-900">18</p>
            <p className="text-xs text-gray-600 mt-2">Payments Received</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">📅</div>
            <p className="text-lg font-bold text-gray-900">36</p>
            <p className="text-xs text-gray-600 mt-2">Due Today</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKhata = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="bg-gradient-to-b from-slate-900 to-blue-900 text-white px-6 py-6">
        <h2 className="text-2xl font-bold">Khata</h2>
        <p className="text-sm text-gray-300 mt-1">{customers.length} customer ledgers</p>
      </div>

      <div className="p-6 space-y-4">
        {customers.map(customer => (
          <div key={customer.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {customer.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{customer.name}</h3>
                <p className="text-xs text-gray-600">{customer.phone}</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">{customer.status}</span>
            </div>
            <div className="bg-gray-50 rounded p-3 mb-3">
              <p className="text-xs text-gray-600">Collection</p>
              <p className="text-sm font-semibold text-gray-900">{customer.collection}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-600">Amount Due</p>
                <p className="text-lg font-bold text-gray-900">₹ {customer.amount}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-xs font-semibold hover:bg-blue-700">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddCustomer = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white px-6 py-6 flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Add Customer</h2>
          <p className="text-sm text-blue-100">Create New Mandate</p>
        </div>
        <button className="bg-blue-500 rounded-full p-3 hover:bg-blue-400">
          <AlertCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Customer Card */}
      <div className="px-6 py-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">₹{formData.totalAmount} · {formData.customerName || 'Customer Name'}</h3>
            <p className="text-sm text-gray-600">{formData.collectionItem || 'Collection Item'}</p>
            <div className="flex items-center gap-2 mt-1">
              <Edit2 className="w-4 h-4 text-blue-600" />
              <a href="#" className="text-blue-600 text-sm font-semibold">Edit</a>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600">Total Amount</p>
            <p className="text-lg font-bold text-green-600">₹{formData.totalAmount}</p>
          </div>
        </div>
      </div>

      {/* Form Sections */}
      <div className="px-6 pb-6 space-y-6">
        {/* Customer Details */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">1. Customer Details</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                <Phone className="w-4 h-4 text-blue-600" /> Customer Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 9583252256"
                value={formData.customerPhone}
                onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                <User className="w-4 h-4 text-blue-600" /> Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Balakram Tudu"
                value={formData.customerName}
                onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                <FileText className="w-4 h-4 text-blue-600" /> Collection For (Item / Bill Details) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Track Pants"
                value={formData.collectionItem}
                onChange={(e) => setFormData({...formData, collectionItem: e.target.value})}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Collection Type */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">2. Collection Type</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border-2 border-blue-500 rounded-lg cursor-pointer bg-blue-50">
              <input
                type="radio"
                name="collectionType"
                value="installments"
                checked={formData.collectionType === 'installments'}
                onChange={(e) => setFormData({...formData, collectionType: e.target.value})}
                className="w-5 h-5"
              />
              <div>
                <div className="font-semibold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" /> Collect in Installments
                </div>
                <p className="text-xs text-gray-600 mt-1">Collect amount in parts</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="collectionType"
                value="onetime"
                checked={formData.collectionType === 'onetime'}
                onChange={(e) => setFormData({...formData, collectionType: e.target.value})}
                className="w-5 h-5"
              />
              <div>
                <div className="font-semibold text-gray-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-600" /> One Time Payment
                </div>
                <p className="text-xs text-gray-600 mt-1">Collect full amount once</p>
              </div>
            </label>
          </div>
        </div>

        {/* Installment Settings */}
        {formData.collectionType === 'installments' && (
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-4">3. Installment Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Frequency <span className="text-red-500">*</span></label>
                  <select value={formData.frequency} onChange={(e) => setFormData({...formData, frequency: e.target.value})} className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Number of Installments <span className="text-red-500">*</span></label>
                  <select value={formData.numInstallments} onChange={(e) => setFormData({...formData, numInstallments: e.target.value})} className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="3">3 Installments</option>
                    <option value="6">6 Installments</option>
                    <option value="12">12 Installments</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700">Start Date <span className="text-red-500">*</span></label>
                <input type="date" value={formData.startDate} onChange={(e) => setFormData({...formData, startDate: e.target.value})} className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              {/* Installment Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-2 text-white">
                  📊
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Installment Summary</h4>
                  <p className="text-sm text-green-800 mt-1">₹83.33 x {formData.numInstallments} Months = ₹{formData.totalAmount}</p>
                  <p className="text-xs text-green-700 mt-2">Collection will start from {formData.startDate || '28/04/26'} and repeat every month.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Method */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">4. Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border-2 border-blue-500 rounded-lg cursor-pointer bg-blue-50">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === 'upi'}
                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                className="w-5 h-5"
              />
              <div className="flex-1">
                <div className="font-semibold text-gray-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" /> UPI AutoPay <span className="bg-green-600 text-white text-xs px-2 py-1 rounded ml-2">Recommended</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Automatic monthly collection via UPI</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="nach"
                checked={formData.paymentMethod === 'nach'}
                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                className="w-5 h-5"
              />
              <div className="flex-1">
                <div className="font-semibold text-gray-900">NACH (Net Banking / Debit Card)</div>
                <p className="text-xs text-gray-600 mt-1">Setup mandate using Net Banking or Debit Card</p>
              </div>
            </label>
          </div>
        </div>

        {/* Charge Penalty */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">5. Charge Penalty (Optional)</h3>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-3 p-3 border-2 border-blue-500 rounded-lg cursor-pointer bg-blue-50">
              <input
                type="radio"
                name="penaltyOption"
                value="no-penalty"
                checked={formData.penaltyOption === 'no-penalty'}
                onChange={(e) => setFormData({...formData, penaltyOption: e.target.value})}
                className="w-5 h-5"
              />
              <div>
                <div className="font-semibold text-gray-900 text-sm">No Penalty</div>
                <p className="text-xs text-gray-600">No penalty will be charged</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="penaltyOption"
                value="charge-later"
                checked={formData.penaltyOption === 'charge-later'}
                onChange={(e) => setFormData({...formData, penaltyOption: e.target.value})}
                className="w-5 h-5"
              />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Charge Manually Later</div>
                <p className="text-xs text-gray-600">I will charge penalty later</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-pointer col-span-2">
              <input
                type="radio"
                name="penaltyOption"
                value="charge-auto"
                checked={formData.penaltyOption === 'charge-auto'}
                onChange={(e) => setFormData({...formData, penaltyOption: e.target.value})}
                className="w-5 h-5"
              />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Charge Automatically</div>
                <p className="text-xs text-gray-600">Add penalty automatically</p>
              </div>
            </label>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
          <div className="text-center">
            <p className="text-xs text-gray-600">Total Collection Amount</p>
            <p className="text-xl font-bold text-gray-900 mt-2">₹{formData.totalAmount}</p>
          </div>
          <div className="text-center border-l border-r border-gray-300">
            <p className="text-xs text-gray-600">Merchant Charge (per installment)</p>
            <p className="text-xl font-bold text-gray-900 mt-2">₹9</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600">Your Collection (per installment)</p>
            <p className="text-xl font-bold text-green-600 mt-2">₹74.33</p>
          </div>
        </div>

        {/* Share Button */}
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 flex items-center justify-center gap-2">
          <span>✈️</span> Share Payment Link - Send mandate link to customer
        </button>
      </div>
    </div>
  );

  const renderCollections = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="bg-gradient-to-b from-slate-900 to-blue-900 text-white px-6 py-6">
        <h2 className="text-2xl font-bold">Collections</h2>
        <p className="text-sm text-gray-300 mt-1">Track all payments received</p>
      </div>

      <div className="p-6 space-y-4">
        {collections.map(collection => (
          <div key={collection.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-xs text-gray-600">{collection.date}</p>
                <h3 className="font-bold text-gray-900">{collection.customer}</h3>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">{collection.status}</span>
            </div>
            <div className="bg-gray-50 rounded p-3 mb-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Amount Collected</p>
                <p className="text-lg font-bold text-green-600">₹ {collection.amount}</p>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{collection.method}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="bg-gradient-to-b from-slate-900 to-blue-900 text-white px-6 py-6">
        <h2 className="text-2xl font-bold">Reports & Analytics</h2>
        <p className="text-sm text-gray-300 mt-1">View your business insights</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
            <p className="text-xs text-gray-600">Total Collected</p>
            <p className="text-2xl font-bold text-green-600 mt-2">₹ 45,280</p>
            <p className="text-xs text-gray-600 mt-2">+12% from last month</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
            <p className="text-xs text-gray-600">Total Due</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">₹ 1,42,220</p>
            <p className="text-xs text-gray-600 mt-2">From 1,250 customers</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
            <p className="text-xs text-gray-600">Success Rate</p>
            <p className="text-2xl font-bold text-purple-600 mt-2">94.5%</p>
            <p className="text-xs text-gray-600 mt-2">Payment collection success</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
            <p className="text-xs text-gray-600">Active Mandates</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">2,847</p>
            <p className="text-xs text-gray-600 mt-2">Currently running</p>
          </div>
        </div>

        {/* Top Customers */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Customers</h3>
          <div className="space-y-3">
            {[
              { name: 'Balakram Tudu', amount: '₹ 12,500', status: '100% Payment' },
              { name: 'Rajesh Kumar', amount: '₹ 10,250', status: '95% Payment' },
              { name: 'Priya Singh', amount: '₹ 8,900', status: '85% Payment' }
            ].map((customer, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">{customer.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{customer.status}</p>
                </div>
                <p className="font-bold text-green-600">{customer.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col overflow-hidden transition-colors duration-700">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setSidebarOpen(false)}>
          <div className="bg-white w-64 h-full p-6 overflow-y-auto shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-600 hover:text-gray-900">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <button onClick={() => { setActiveTab('home'); setSidebarOpen(false); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 flex items-center gap-3">
                <Home className="w-5 h-5 text-blue-600" /> Home
              </button>
              <button onClick={() => { setActiveTab('khata'); setSidebarOpen(false); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" /> Khata
              </button>
              <button onClick={() => { setActiveTab('collections'); setSidebarOpen(false); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 flex items-center gap-3">
                <TrendingDown className="w-5 h-5 text-blue-600" /> Collections
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-blue-900 text-white px-6 py-10 relative z-0 flex justify-between items-center rounded-bl-4xl rounded-br-4xl">
        <button onClick={() => setSidebarOpen(true)} className="hover:opacity-80 transition">
          <Menu className="w-6 h-6" />
        </button>
        <div className="text-center flex-1">
          <div className="text-xl font-bold">👑 KHERWAL BAZAAR</div>
          <div className="text-yellow-400 text-xs tracking-wider">UDHAR RECOVERY SYSTEM</div>
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 hover:opacity-80 transition cursor-pointer" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</div>
        </div>
      </div>

      {/* Blank Card - Home Only */}
      {activeTab === 'home' && (
        <div className="px-6 pb-2 -mt-6 relative z-10">
          <Image
            src="/banner.png"
            alt="Banner"
            width={900}
            height={360}
            priority
            className="w-full rounded-2xl border-2 border-white shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      {activeTab === 'home' && renderDashboard()}
      {activeTab === 'khata' && renderKhata()}
      {activeTab === 'add' && renderAddCustomer()}
      {activeTab === 'collections' && renderCollections()}
      {activeTab === 'reports' && renderReports()}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}
