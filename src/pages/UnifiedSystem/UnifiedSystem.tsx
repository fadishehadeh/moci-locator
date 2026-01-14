import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Building2, 
  Clock, 
  UserPlus, 
  FileCheck,
  Briefcase,
  Users,
  ClipboardList,
  Shield,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

const UnifiedSystem: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const services = [
    { icon: FileText, title: 'جميع معاملاتك', titleEn: 'All Your Transactions' },
    { icon: Building2, title: 'تغيير مقدمتها', titleEn: 'Change Submissions' },
    { icon: Clock, title: 'الحضور', titleEn: 'Attendance' },
    { icon: FileText, title: 'الأجور', titleEn: 'Wages' },
    { icon: UserPlus, title: 'إضافة موظف جديد - إقامة عمل وإصدار البطاقة', titleEn: 'Add New Employee - Work Permit & Card' },
    { icon: FileCheck, title: 'إشعار عن عدم الاستقدام', titleEn: 'Non-Recruitment Notice' },
    { icon: Briefcase, title: 'إضافة معاملة جديدة برخصة عمل جديدة', titleEn: 'Add New Transaction with Work License' },
    { icon: Shield, title: 'إضافة مرخصة تجديد', titleEn: 'Add Renewal License' },
    { icon: Users, title: 'إضافة معاملة جديدة برخصة عمل جديدة', titleEn: 'Add New Transaction with Work License' },
    { icon: ClipboardList, title: 'إضافة مستخدم', titleEn: 'Add User' },
    { icon: FileCheck, title: 'إضافة وكيل جديد - حقوق الموظف', titleEn: 'Add New Agent - Employee Rights' },
    { icon: MessageSquare, title: 'استعلام عن طلب استقالة', titleEn: 'Resignation Request Inquiry' },
    { icon: FileText, title: 'إعداد وإصدار البطاقة', titleEn: 'Card Preparation & Issuance' },
    { icon: Clock, title: 'استمارة طلب وقف نقل وقف نقل', titleEn: 'Stop Transfer Request Form' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#1D4381] to-[#1B458A]">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        {/* Left side - Language and accessibility */}
        <div className="flex items-center gap-4 text-white">
          <button className="text-sm hover:underline">English</button>
          <button className="text-xl">🔊</button>
          <button className="text-xl">A+</button>
          <button className="text-xl">A</button>
          <button className="text-xl">A-</button>
          <button className="px-4 py-2 bg-white text-[#1D4381] rounded-full text-sm font-medium">
            تسجيل الدخول
          </button>
        </div>

        {/* Right side - Logos */}
        <div className="flex items-center gap-6">
          {/* Placeholder for second logo */}
          <div className="w-24 h-16 bg-white/10 rounded flex items-center justify-center text-white text-xs">
            Logo 2
          </div>
          {/* MOCI Logo */}
          <div className="w-32 h-20 bg-white/10 rounded flex items-center justify-center text-white text-xs">
            MOCI Logo
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Login Card */}
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              {/* Tawtheeq Logo */}
              <div className="mb-6">
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600">
                  Tawtheeq Logo
                </div>
              </div>

              <h2 className="text-2xl font-bold text-right mb-2">تسجيل الدخول</h2>
              <p className="text-right text-gray-600 mb-1">ليس لديك حساب؟ <a href="#" className="text-[#345D9B] hover:underline">إنشاء حساب</a></p>
              <p className="text-right text-sm text-gray-500 mb-6">أو سجل الدخول باستخدام</p>

              <form className="space-y-4">
                <div>
                  <label className="block text-right text-sm font-medium text-gray-700 mb-2">
                    اسم المستخدم
                  </label>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-right"
                    placeholder="أدخل اسم المستخدم"
                  />
                </div>

                <div>
                  <label className="block text-right text-sm font-medium text-gray-700 mb-2">
                    كلمة المرور
                  </label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-right"
                    placeholder="أدخل كلمة المرور أو رقم الهوية"
                  />
                  <a href="#" className="block text-right text-sm text-[#345D9B] hover:underline mt-2">
                    نسيت كلمة المرور؟
                  </a>
                </div>

                <Button className="w-full bg-[#345D9B] hover:bg-[#1D4381] text-white h-12 text-lg">
                  تسجيل الدخول
                </Button>

                <div className="text-center text-sm text-gray-600">
                  أو
                </div>

                <Button variant="outline" className="w-full h-12 text-[#345D9B] border-[#345D9B]">
                  تسجيل الدخول بالبطاقة الذكية
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* MOCI Logo Card */}
          <div className="bg-[#345D9B]/30 backdrop-blur-sm rounded-lg p-12 flex flex-col items-center justify-center text-white">
            <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mb-6">
              {/* MOCI Emblem */}
              <div className="text-center">
                <div className="text-6xl mb-2">⚔️</div>
                <div className="text-sm">MOCI Emblem</div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-2">وزارة التجارة والصناعة</h1>
            <p className="text-center text-sm opacity-90">تعزيز بيئة تجارية وصناعية تنافسية ومستدامة</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <button className="text-[#345D9B] hover:underline">← العودة إلى الصفحة</button>
            <h2 className="text-3xl font-bold text-gray-900">الخدمات</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#345D9B]/10 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-[#345D9B]" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.titleEn}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded">→</button>
              <button className="px-4 py-2 bg-[#345D9B] text-white rounded">1</button>
              <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded">2</button>
              <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded">3</button>
              <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded">←</button>
            </div>
            <p className="text-sm text-gray-600">عرض 1 إلى 12 من 36 نتيجة</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1D4381] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div className="text-right">
              <h3 className="font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-end gap-2">
                  <span>+974 4011 1020</span>
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span>info@moci.gov.qa</span>
                  <Mail className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-right">
              <h3 className="font-bold mb-4">روابط سريعة</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:underline">الخدمات الإلكترونية</a>
                <a href="#" className="block hover:underline">الأسئلة الشائعة</a>
                <a href="#" className="block hover:underline">اتصل بنا</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-right">
              <h3 className="font-bold mb-4">تابعونا</h3>
              <div className="flex justify-end gap-4">
                <a href="#" className="hover:opacity-80">📘</a>
                <a href="#" className="hover:opacity-80">🐦</a>
                <a href="#" className="hover:opacity-80">📷</a>
                <a href="#" className="hover:opacity-80">💼</a>
                <a href="#" className="hover:opacity-80">▶️</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm">جميع الحقوق محفوظة © 2026</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-sm hover:underline">سياسة الخصوصية</a>
              <a href="#" className="text-sm hover:underline">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UnifiedSystem;

