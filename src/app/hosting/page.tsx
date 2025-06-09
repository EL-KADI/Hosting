'use client';
import React, { JSX } from 'react';
import Header from '@/components/common/Header';
import HeroSection from '@/components/common/HeroSection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import '../../styles/index.css';
import Link from 'next/link';
export default function HostingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <section className="lg:pt-72 pt-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-purple-900 mb-6">
              مجموعات <span className="font-bold">Kubernetes</span> في غضون دقائق فقط
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              توقف عن إضاعة الوقت والجهد في إدارة مجموعات Kubernetes. باستخدام Kubernetes Engine
              المُدار بالكامل، يمكنك بسهولة إطلاق وإدارة وضبط موارد تطبيقاتك في الحاويات في دقائق
              بدلاً من أيام.
            </p>
            <div className="mt-8 ">
              <Button
                className="border-2 rounded-lg text-sm text-[#092346] px-6 border-[#092346]"
                variant="outline"
              >
                اطلب الان!
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50 z-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-900 mb-6">
              انطلق أسرع وسارع في نموّ عملك
            </h2>
          </div>
          <div className="grid grid-cols-1 direction-ltr lg:px-32  md:grid-cols-3 gap-8">
            <Card className="text-right p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_download_6.svg"
                  alt="Email Protection"
                  width={91}
                  height={59}
                  className="ms-auto"
                />
              </div>
              <h3 className="lg:text-xl text-sm font-semibold mb-4">
                حظر البريد الإلكتروني غير المصرح به
              </h3>
              <p
                className="text-gray-600 text-xs lg:text-[16px] leading-relaxed text-right"
                dir="rtl"
              >
                قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.
              </p>
            </Card>
            <Card className="text-right p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_download_5.svg"
                  alt="Email Protection"
                  width={91}
                  height={72}
                  className="ms-auto"
                />
              </div>
              <h3 className="lg:text-xl text-sm font-semibold mb-4">
                حظر البريد الإلكتروني غير المصرح به
              </h3>
              <p className="text-gray-600 text-xs lg:text-[16px] leading-relaxed " dir="rtl">
                قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.
              </p>
            </Card>
            <Card className="text-right r p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_download_4.svg"
                  alt="Email Protection"
                  width={91}
                  height={71}
                  className="ms-auto"
                />
              </div>
              <h3 className="lg:text-xl text-sm  font-semibold mb-4">
                حظر البريد الإلكتروني غير المصرح به
              </h3>
              <p className="text-gray-600 text-xs lg:text-[16px] leading-relaxed" dir="rtl">
                قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="pb-56 -mt-36 ">
          <Image
            src="/images/bg-cupe.png"
            alt="Background"
            width={1440}
            height={969}
            className="w-[120%] h-full absolute "
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-semibold text-purple-900 mb-6 relative z-50">
              اختار الخطط
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="bg-blue-400 h-5 w-full"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center text-blue-900 mb-4">P2-HOST</h3>
                <div className="mb-6 text-center">
                  <span className="text-6xl font-light text-blue-900">91.30</span>
                  <span className="text-2xl opacity-80 text-gray-500 mr-2">د.ل</span>
                </div>
                <div className="mb-4 text-center">
                  <span className="bg-[#FEE9DF]  text-[#F67A3C] px-3 py-1 rounded text-sm ml-2">
                    تخفيض 30%
                  </span>
                  <span className="text-2xl text-gray-500 opacity-70 ">
                    120 <span className="text-sm">د.ل</span>
                  </span>
                </div>
                <div className="flex justify-center mx-auto">
                  {' '}
                  <Button className="text-center mb-6 bg-[#2B1F51] px-7">اطلب الان</Button>
                </div>
                <div className="border-t-2 mb-5 "></div>

                <div className="space-y-3 text-sm" dir="ltr">
                  <div>
                    <strong>60GB</strong> NVMe Storage
                  </div>
                  <div>
                    <strong>15</strong> Website (s)
                  </div>
                  <div>
                    <strong>4</strong> RAM
                  </div>
                  <div>
                    <strong>3</strong> CPU
                  </div>
                  <div>cPanel Control Panel</div>
                  <div>
                    <strong>Unlimited</strong> Subdomains
                  </div>
                  <div>
                    <strong>Unlimited</strong> MySQL & SQL Databases
                  </div>
                  <div>
                    <strong>Unlimited</strong> Email Account
                  </div>
                  <div>
                    <strong>Unlimited</strong> FTP Accounts
                  </div>
                  <br />
                  <div className="opacity-80">Dedicated Name Server(ns1,ns2)</div>
                </div>
                <div className="mt-6 pt-6 flex mx-auto justify-center ">
                  <Link href="#" className="text-purple-900 text-sm text-center">
                    compare packages
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="bg-gray-300 h-5 w-full"></div>
              <div className="p-8 ">
                <h3 className="text-2xl text-center font-bold text-blue-900 mb-4">P2-HOST</h3>
                <div className="mb-6 text-center">
                  <span className="text-6xl font-light text-blue-900">91.30</span>
                  <span className="text-2xl opacity-80 text-gray-500 mr-2">د.ل</span>
                </div>
                <div className="mb-4 text-center direction-ltr">
                  <span className="bg-[#FEE9DF]  text-[#F67A3C] px-3 py-1 rounded text-sm ml-2">
                    تخفيض 30%
                  </span>
                  <span className="text-2xl text-gray-500 opacity-70 ">
                    120 <span className="text-sm">د.ل</span>
                  </span>
                </div>
                <div className="flex justify-center mx-auto">
                  {' '}
                  <Button className="text-center mb-6 bg-[#2B1F51] px-7">اطلب الان</Button>
                </div>
                <div className="border-t-2 mb-5 "></div>

                <div className="space-y-3 text-sm" dir="ltr">
                  <div>
                    <strong>60GB</strong> NVMe Storage
                  </div>
                  <div>
                    <strong>15</strong> Website (s)
                  </div>
                  <div>
                    <strong>4</strong> RAM
                  </div>
                  <div>
                    <strong>3</strong> CPU
                  </div>
                  <div>cPanel Control Panel</div>
                  <div>
                    <strong>Unlimited</strong> Subdomains
                  </div>
                  <div>
                    <strong>Unlimited</strong> MySQL & SQL Databases
                  </div>
                  <div>
                    <strong>Unlimited</strong> Email Account
                  </div>
                  <div>
                    <strong>Unlimited</strong> FTP Accounts
                  </div>
                  <br />
                  <div className="opacity-80">Dedicated Name Server(ns1,ns2)</div>
                </div>
                <div className="mt-6 pt-6 flex mx-auto justify-center ">
                  <Link href="#" className="text-purple-900 text-sm text-center">
                    compare packages
                  </Link>
                </div>
              </div>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="bg-yellow-400 h-5 w-full"></div>
              <div className="p-8">
                <h3 className="text-2xl text-center font-bold text-blue-900 mb-4">P2-HOST</h3>
                <div className="mb-6 text-center">
                  <span className="text-6xl  font-light text-blue-900">91.30</span>
                  <span className=" text-2xl opacity-80 text-gray-500 mr-2">د.ل</span>
                </div>
                <div className="mb-4 text-center">
                  <span className="bg-[#FEE9DF]   text-[#F67A3C] px-3 py-1 rounded text-sm ml-2">
                    تخفيض 30%
                  </span>
                  <span className="text-2xl text-gray-500 opacity-70 ">
                    120 <span className="text-sm">د.ل</span>
                  </span>
                </div>
                <div className="flex justify-center mx-auto">
                  {' '}
                  <Button className="text-center mb-6 bg-[#2B1F51] px-7">اطلب الان</Button>
                </div>
                <div className="border-t-2 mb-5 "></div>
                <div className="space-y-3 text-sm" dir="ltr">
                  <div>
                    <strong>60GB</strong> NVMe Storage
                  </div>
                  <div>
                    <strong>15</strong> Website (s)
                  </div>
                  <div>
                    <strong>4</strong> RAM
                  </div>
                  <div>
                    <strong>3</strong> CPU
                  </div>
                  <div>cPanel Control Panel</div>
                  <div>
                    <strong>Unlimited</strong> Subdomains
                  </div>
                  <div>
                    <strong>Unlimited</strong> MySQL & SQL Databases
                  </div>
                  <div>
                    <strong>Unlimited</strong> Email Account
                  </div>
                  <div>
                    <strong>Unlimited</strong> FTP Accounts
                  </div>
                  <br />
                  <div className="opacity-80">Dedicated Name Server(ns1,ns2)</div>
                </div>
                <div className="mt-6 pt-6 flex mx-auto justify-center ">
                  <Link href="#" className="text-purple-900 text-sm text-center">
                    compare packages
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              لست واثقًا من أين ستبدأ؟ لا تقلق، سنقوم بمساعدتك
            </h2>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed mb-4  font-light">
              شركة العنكبوت الليبي وبصفتها مزوّدًا رسميًا لحلول مايكروسوفت السحابيّة، على استعداد
              لمساعدة مؤسستك في تبنّي حل الإنتاجية السحابي "مايكروسوفت 365" ودمجه بالكامل مع آلية
              عملك.
            </p>
            <p className="text-xl font-semibold text-black max-w-4xl mx-auto leading-relaxed mb-8 ">
              نفتخر بخدمتنا للعديد من الشركات في رحلتهم لتنفيذ عمليّة انتقالهم إلى خدمات مايكروسوفت
              365 بنجاح – ويسعدنا مساعدتكم أنتم كذلك!
            </p>
            <Button
              className="border-2 rounded-lg text-sm text-[#092346] px-6 border-[#092346]"
              variant="outline"
            >
              اطلب الان!
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 lg:px-52 lg:mb-20" dir="ltr">
            <div className="text-center">
              <Image
                src="/images/img_vector_black_900.svg"
                alt="Settings"
                width={24}
                height={24}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">تغييرات الإعدادات</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/img_vector_black_900.svg"
                alt="Training"
                width={24}
                height={24}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">التدريب</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/img_vector_black_900.svg"
                alt="Support"
                width={24}
                height={24}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">الدعم الفني</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:px-52" dir="ltr">
            <div className="text-center">
              <Image
                src="/images/img_vector_black_900.svg"
                alt="Configuration"
                width={24}
                height={24}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">ضبط الإعدادات والتخصيص</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/img_vector_black_900.svg"
                alt="Migration"
                width={24}
                height={24}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">ترحيل البيانات والمستخدمين</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/img_vector_black_900.svg"
                alt="SharePoint"
                width={24}
                height={24}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2" dir="rtl">
                ترحيل SharePoint Online
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="mb-40">
          <Image
            src="/images/bg-btn-start.png"
            alt="Background"
            width={1440}
            height={969}
            className="lg:w-full h-[50%] xl:object-cover xl:object-top absolute  "
          />
        </div>
        <div className="container mx-auto px-4 z-50 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-6">ما الذي يميز</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:px-28" dir="ltr">
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_gearicon_1.svg"
                  alt="Performance"
                  width={75}
                  height={65}
                  className="ms-auto  w-[60px]"
                />
              </div>
              <h3 className="lg:text-lg text-base font-semibold mb-4 text-right">
                تحسين أداء الموقع عبر CDN
              </h3>
              <p className="lg:text-sm text-xs text-gray-600 leading-relaxed text-right">
                تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال
                الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_performanceicon_1.svg"
                  alt="DDoS Protection"
                  width={75}
                  height={74}
                  className="ms-auto  w-[65px]"
                />
              </div>
              <h3 className="lg:text-lg text-base font-semibold mb-4 text-right">
                التخفيف من هجمات DDoS
              </h3>
              <p className="lg:text-sm text-xs text-gray-600 leading-relaxed text-right">
                يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات
                DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_securityicon_1.svg"
                  alt="Security"
                  width={77}
                  height={56}
                  className="ms-auto  w-12"
                />
              </div>
              <h3 className="lg:text-lg text-base font-semibold mb-4 text-right">
                الحماية من عمليّات الاختراق والبرامج الخبيثة
              </h3>
              <p className="lg:text-sm text-xs text-gray-600 leading-relaxed text-right">
                قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات
                Zero-Day وهجمات تخمين كلمة المرور Brute Force.
              </p>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-28" dir="ltr">
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_visitorsicon_1.svg"
                  alt="Visitors"
                  width={75}
                  height={36}
                  className="ms-auto w-12 h-[75px] "
                />
              </div>
              <h3 className="lg:text-lg text-base font-semibold mb-4 text-right">
                تحسين أداء الموقع عبر CDN
              </h3>
              <p className="lg:text-sm text-xs text-gray-600 leading-relaxed text-right">
                تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال
                الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_easetouseicon_1.svg"
                  alt="Ease of Use"
                  width={74}
                  height={78}
                  className="ms-auto  w-18 h-18"
                />
              </div>
              <h3 className="lg:text-lg text-base font-semibold mb-4 text-right">
                التخفيف من هجمات DDoS
              </h3>
              <p className="lg:text-sm text-xs text-gray-600 leading-relaxed text-right">
                يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات
                DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_growthicon_1.svg"
                  alt="Growth"
                  width={88}
                  height={65}
                  className="ms-auto w-[54px]"
                />
              </div>
              <h3 className="lg:text-lg text-base font-semibold mb-4 text-right">
                الحماية من عمليّات الاختراق والبرامج الخبيثة
              </h3>
              <p className="lg:text-sm text-xs text-gray-600 leading-relaxed text-right">
                قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات
                Zero-Day وهجمات تخمين كلمة المرور Brute Force.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl text-center font-bold text-purple-900 mb-6">
              موثوق به من قبل عملائنا
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 lg:px-28" dir="ltr">
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_dic1_1.png"
                  alt="Documentation Center"
                  width={147}
                  height={158}
                  className="mx-auto"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">مركز المعلومات والتوثيق</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_governmentofnationalaccord01_1.svg"
                  alt="Financial Releases Committee"
                  width={142}
                  height={142}
                  className="mx-auto"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">لجنة الإفراجات المالية</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_socialsecurityfund_1.svg"
                  alt="Social Security Fund"
                  width={164}
                  height={164}
                  className="mx-auto"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">صندوق الضمان الاجتماعي</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_socialsecurityfund_1.svg"
                  alt="Social Security Fund"
                  width={164}
                  height={164}
                  className="mx-auto"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">صندوق الضمان الاجتماعي</h3>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4  gap-8 lg:px-28" dir="ltr">
            <div className="w-[50%]"></div>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_governmentofnationalaccord01_1.svg"
                  alt="Commercial Registry"
                  width={142}
                  height={142}
                  className="mx-auto"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">مصلحة السجل التجاري</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/images/img_logods1trans350px_1.png"
                  alt="Zat Al Sawari Pharmacy"
                  width={152}
                  height={188}
                  className="mx-auto"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">صيدلية ذات الصواري</h3>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-28">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex items-center justify-between">
                      <Image src="/images/img_fd.svg" alt="Expand" width={14} height={14} />
                      <h3 className="lg:text-xl text-sm text-purple-900 font-medium" dir="rtl">
                        ما هو المُخدّم الافتراضي المخصص (VPS)؟
                      </h3>
                    </div>
                    <div className="flex justify-end me-auto">
                      {' '}
                      <p
                        className="lg:text-sm text-[10px] text-gray-600 mt-4 lg:max-w-[39.8rem]  text-right leading-relaxed"
                        dir="rtl"
                      >
                        المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون
                        لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست
                        مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة
                        المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 flex-wrap">
                    <Image src="/images/img_fgfg.svg" alt="Expand" width={14} height={14} />
                    <h3 className="lg:text-xl text-right  text-[10px] text-purple-900 font-medium">
                      متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة؟
                    </h3>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <Image src="/images/img_fgfg.svg" alt="Expand" width={14} height={14} />
                    <h3 className="lg:text-xl text-[10px] text-right text-purple-900 font-medium">
                      ما الفرق بين المُخدّم الافتراضي والمُخدّم المخصص؟
                    </h3>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <Image src="/images/img_fgfg.svg" alt="Expand" width={14} height={14} />
                    <h3 className="lg:text-xl text-[10px] text-right text-purple-900 font-medium">
                      ماهي المواقع المتاحة لاستضافة VPS؟
                    </h3>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-8">
              <Card className="text-center p-8">
                <div className="mb-6">
                  <Image
                    src="/images/img_faqicon_1.svg"
                    alt="FAQ"
                    width={129}
                    height={101}
                    className="mx-auto"
                  />
                </div>
                <div className="border-b-2 border-blue-500 w-32 mx-auto mb-4"></div>
                <h3 className="text-xl font-medium">الأسئلة الشائعة</h3>
              </Card>
              <Card className="text-center p-8">
                <div className="mb-6">
                  <Image
                    src="/images/img_download_1.svg"
                    alt="Help Center"
                    width={100}
                    height={65}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-medium">مركز المساعدة</h3>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
