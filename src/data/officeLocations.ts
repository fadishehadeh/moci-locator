// Office Location Data Structure for MOCI New Building

export interface OfficeLocation {
  employeeNumber: string;
  employeeName: string;
  floor: number;
  zone: string;
  officeNumber: string;
  department: string;
  extension?: string;
  nearestLandmark?: string;
  directions?: string;
}

// Mock employee data for demonstration
// In production, this would be fetched from a database/API
export const employeeLocations: OfficeLocation[] = [
  {
    employeeNumber: "10001",
    employeeName: "Ahmed Al-Mansouri",
    floor: 1,
    zone: "A",
    officeNumber: "1A-101",
    department: "Reception & Customer Service",
    extension: "1101",
    nearestLandmark: "Main Entrance",
    directions: "Ground floor, Zone A, near the main entrance lobby"
  },
  {
    employeeNumber: "10002",
    employeeName: "Fatima Al-Thani",
    floor: 2,
    zone: "B",
    officeNumber: "2B-205",
    department: "Business Registration",
    extension: "2205",
    nearestLandmark: "East Elevator",
    directions: "Second floor, Zone B, turn right from the east elevator"
  },
  {
    employeeNumber: "10003",
    employeeName: "Mohammed Al-Kuwari",
    floor: 3,
    zone: "C",
    officeNumber: "3C-312",
    department: "Trade Names Department",
    extension: "3312",
    nearestLandmark: "Central Meeting Room",
    directions: "Third floor, Zone C, opposite the central meeting room"
  },
  {
    employeeNumber: "10004",
    employeeName: "Noora Al-Sulaiti",
    floor: 4,
    zone: "A",
    officeNumber: "4A-401",
    department: "Consumer Protection",
    extension: "4401",
    nearestLandmark: "West Wing",
    directions: "Fourth floor, Zone A, west wing near the conference hall"
  },
  {
    employeeNumber: "10005",
    employeeName: "Khalid Al-Marri",
    floor: 5,
    zone: "B",
    officeNumber: "5B-510",
    department: "International Trade",
    extension: "5510",
    nearestLandmark: "Executive Area",
    directions: "Fifth floor, Zone B, executive area near the boardroom"
  },
  {
    employeeNumber: "10006",
    employeeName: "Maryam Al-Attiyah",
    floor: 2,
    zone: "A",
    officeNumber: "2A-201",
    department: "Legal Affairs",
    extension: "2201",
    nearestLandmark: "North Corridor",
    directions: "Second floor, Zone A, first office in the north corridor"
  },
  {
    employeeNumber: "10007",
    employeeName: "Saeed Al-Naimi",
    floor: 3,
    zone: "B",
    officeNumber: "3B-308",
    department: "IT Department",
    extension: "3308",
    nearestLandmark: "Server Room",
    directions: "Third floor, Zone B, near the server room and IT support desk"
  },
  {
    employeeNumber: "10008",
    employeeName: "Hessa Al-Dosari",
    floor: 1,
    zone: "B",
    officeNumber: "1B-115",
    department: "Human Resources",
    extension: "1115",
    nearestLandmark: "HR Reception",
    directions: "Ground floor, Zone B, HR department near the staff entrance"
  },
  {
    employeeNumber: "10009",
    employeeName: "Jassim Al-Baker",
    floor: 4,
    zone: "C",
    officeNumber: "4C-425",
    department: "Finance Department",
    extension: "4425",
    nearestLandmark: "Accounting Section",
    directions: "Fourth floor, Zone C, accounting section near the south elevator"
  },
  {
    employeeNumber: "10010",
    employeeName: "Aisha Al-Mohannadi",
    floor: 5,
    zone: "A",
    officeNumber: "5A-505",
    department: "Executive Office",
    extension: "5505",
    nearestLandmark: "Minister's Office",
    directions: "Fifth floor, Zone A, executive suite near the minister's office"
  },
  // Additional sample employees
  {
    employeeNumber: "10011",
    employeeName: "Hamad Al-Kaabi",
    floor: 2,
    zone: "C",
    officeNumber: "2C-220",
    department: "Public Relations",
    extension: "2220",
    nearestLandmark: "Media Center",
    directions: "Second floor, Zone C, near the media center and press room"
  },
  {
    employeeNumber: "10012",
    employeeName: "Shaikha Al-Mannai",
    floor: 3,
    zone: "A",
    officeNumber: "3A-305",
    department: "Strategic Planning",
    extension: "3305",
    nearestLandmark: "Planning Wing",
    directions: "Third floor, Zone A, strategic planning wing"
  }
];

// Helper function to find employee by employee number
export const findEmployeeByNumber = (employeeNumber: string): OfficeLocation | undefined => {
  return employeeLocations.find(
    (emp) => emp.employeeNumber.toLowerCase() === employeeNumber.toLowerCase().trim()
  );
};

// Get all unique floors
export const getFloors = (): number[] => {
  return Array.from(new Set(employeeLocations.map(emp => emp.floor))).sort((a, b) => a - b);
};

// Get all unique zones
export const getZones = (): string[] => {
  return Array.from(new Set(employeeLocations.map(emp => emp.zone))).sort();
};

