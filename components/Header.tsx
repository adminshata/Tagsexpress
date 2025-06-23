"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FileText,
  RotateCcw,
  Archive,
  CornerUpLeft,
  Zap,
  Key,
  ClipboardList,
  Search,
  CalendarDays,
  DollarSign,
  ChevronDown,
  Map,
  HelpCircle,
} from "lucide-react";

const serviceSections = [
  {
    heading: "DMV Registration & Renewal",
    items: [
      { title: "Registration Renewal", href: "/services/registration-renewal", icon: FileText },
      { title: "Replacement Sticker", href: "/services/replacement-sticker", icon: RotateCcw },
      { title: "Check Registration Status", href: "/services/check-vehicle-registration-status", icon: Search },
      { title: "Reinstate Suspended Registration", href: "/services/reinstate-suspended-vehicle-registration", icon: ClipboardList },
      { title: "Change Name & Address", href: "/services/change-name-address-registration", icon: FileText },
      { title: "Fleet Services", href: "/services/fleet-services-registration-management", icon: DollarSign },
    ],
  },
  {
    heading: "Title Transfers & Salvage",
    items: [
      { title: "California Title Transfer", href: "/services/california-title-transfer", icon: Archive },
      { title: "Out-of-State Title Transfer", href: "/services/out-of-state-title-transfer", icon: CornerUpLeft },
      { title: "Duplicate Title", href: "/services/duplicate-title", icon: FileText },
      { title: "Motorcycle Title Transfer", href: "/services/motorcycle-title-transfer", icon: Key },
      { title: "OHV Title Transfer", href: "/services/ohv-title-transfer", icon: Key },
      { title: "Motorhome Title Transfer", href: "/services/motorhome-title-transfer", icon: Key },
      { title: "Boat Registration & Transfer", href: "/services/boat-registration-title-transfer", icon: Key },
      { title: "Revived Salvage & Junked", href: "/services/revived-salvage-junked-vehicles", icon: Zap },
    ],
  },
  {
    heading: "Inspections & Compliance",
    items: [
      { title: "Smog Check & Emissions", href: "/services/smog-check-and-emissions-testing", icon: Zap },
      { title: "VIN Verification", href: "/services/vin-verification", icon: Key },
      { title: "Mobile VIN Verification", href: "/services/mobile-vin-verification", icon: Key },
      { title: "Notary Public", href: "/services/notary-public", icon: Key },
      { title: "Passport Photo", href: "/services/passport-photo", icon: FileText },
      { title: "Pay Parking Citation", href: "/services/pay-parking-citation", icon: DollarSign },
    ],
  },
  {
    heading: "Verifications & Scans",
    items: [
      { title: "Live Scan", href: "/services/live-scan", icon: Zap },
      { title: "Uber Vehicle Inspection", href: "/services/uber-vehicle-inspection", icon: Zap },
      { title: "Lyft Vehicle Inspection", href: "/services/lyft-vehicle-inspection", icon: Zap },
      { title: "Turo Vehicle Inspection", href: "/services/turo-vehicle-inspection", icon: Zap },
    ],
  },
];

const resourceSections = [
  {
    heading: "Resources",
    items: [
      { title: "DMV Forms Library", href: "/resources/dmv-forms", icon: FileText },
      { title: "Service Area", href: "/resources/service-area", icon: Map },
      { title: "Frequently Asked Questions", href: "/resources/faq", icon: HelpCircle },
      { title: "Blog Articles", href: "/blog", icon: FileText },
    ],
  },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Tags Express" width={150} height={50} />
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-red-600">Home</Link>

          {/* Services Mega Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setResourcesOpen(false);
              }}
              className="flex items-center space-x-1 font-semibold text-gray-700 hover:text-red-600"
            >
              <span>Services</span>
              <ChevronDown size={16} className={servicesOpen ? "rotate-180 transition" : "transition"} />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full transform -translate-x-1/2 bg-white border-t border-gray-200 shadow-lg z-50 w-screen max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                  {serviceSections.map(({ heading, items }) => (
                    <div key={heading}>
                      <p className="font-semibold text-gray-800 mb-3">{heading}</p>
                      <ul className="space-y-2">
                        {items.map(({ title, href, icon: Icon }) => (
                          <li key={title}>
                            <Link
                              href={href}
                              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition"
                              onClick={() => setServicesOpen(false)}
                            >
                              <Icon size={20} className="text-red-600 flex-shrink-0" />
                              <span className="text-gray-700">{title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-gray-700 hover:text-red-600">About</Link>

          {/* Resources Mega Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setServicesOpen(false);
              }}
              className="flex items-center space-x-1 font-semibold text-gray-700 hover:text-red-600"
            >
              <span>Resources</span>
              <ChevronDown size={16} className={resourcesOpen ? "rotate-180 transition" : "transition"} />
            </button>

            {resourcesOpen && (
              <div className="absolute left-1/2 top-full transform -translate-x-1/2 bg-white border-t border-gray-200 shadow-lg z-50 w-screen max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                  {resourceSections.map(({ heading, items }) => (
                    <div key={heading}>
                      <p className="font-semibold text-gray-800 mb-3">{heading}</p>
                      <ul className="space-y-2">
                        {items.map(({ title, href, icon: Icon }) => (
                          <li key={title}>
                            <Link
                              href={href}
                              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition"
                              onClick={() => setResourcesOpen(false)}
                            >
                              <Icon size={20} className="text-red-600 flex-shrink-0" />
                              <span className="text-gray-700">{title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
          <Link
            href="/contact"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}