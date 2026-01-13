# Office Locator Feature - Documentation

## Overview
The Office Locator is a digital solution designed to help MOCI employees find their office locations in the new building. This feature provides an intuitive, interactive interface for employees to quickly locate their workspace.

---

## User Journey

### Step 1: Landing Page
- Employee navigates to `/locator`
- Clean, professional interface with MOCI branding
- Clear call-to-action: "Find Your Office Location"

### Step 2: Employee Number Input
- Employee enters their employee number in a prominent search field
- Sample employee numbers provided for easy testing
- Real-time validation and error handling
- Accessible keyboard navigation

### Step 3: Location Display
- **Success confirmation** with employee name
- **Office details** prominently displayed:
  - Office Number (large, bold display)
  - Floor (with user-friendly labels: Ground Floor, 1st Floor, etc.)
  - Zone (A, B, or C)
  - Department
  - Extension number
- **Interactive building visualization**:
  - 5-floor building representation
  - Visual highlighting of employee's floor and zone
  - "You Are Here" indicator
  - Color-coded zones for easy identification
- **Directions card**:
  - Step-by-step directions to the office
  - Nearest landmark information
  - Clear, concise guidance

### Step 4: Additional Actions
- "Search Another Employee" button to start a new search
- Persistent header and footer for navigation

---

## Features

### 🎨 Design Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Fully compatible with the site's theme system
- **Accessibility Compliant**: WCAG 2.1 AA standards, keyboard navigation, ARIA labels
- **Smooth Animations**: Fade-in effects, pulse animations, and transitions for better UX
- **Qatar Branding**: Uses MOCI's maroon color scheme (#8b0d32)

### 🔍 Interactive Elements
- **Building Visualization**: 
  - 5-floor interactive building diagram
  - 3 zones per floor (A, B, C)
  - Animated highlighting of target location
  - Visual "You Are Here" indicator
  - Color-coded legend
- **Real-time Search**: Instant results with loading states
- **Error Handling**: Clear error messages for invalid employee numbers
- **Sample Data**: Quick-test buttons with pre-filled employee numbers

### 📱 User Experience
- **Single Page Application**: No page reloads, smooth transitions
- **Loading States**: Visual feedback during search
- **Success Confirmation**: Animated checkmark and welcome message
- **Clear Information Hierarchy**: Most important info (office number) is most prominent
- **Sticky Visualization**: Building diagram stays visible while scrolling

---

## Technical Implementation

### Technology Stack
- **React 18** with TypeScript
- **React Router** for routing
- **Tailwind CSS** for styling
- **shadcn/ui** components (Card, Button, Input, Alert)
- **Lucide React** for icons
- **Vite** for build tooling

### File Structure
```
src/
├── pages/
│   └── OfficeLocator/
│       ├── OfficeLocator.tsx           # Main page component
│       ├── OfficeLocationDisplay.tsx   # Results display component
│       └── BuildingVisualization.tsx   # Interactive building diagram
├── data/
│   └── officeLocations.ts              # Employee data structure and mock data
└── App.tsx                             # Route configuration
```

### Data Structure
```typescript
interface OfficeLocation {
  employeeNumber: string;      // Unique employee identifier
  employeeName: string;         // Full name
  floor: number;                // Floor number (1-5)
  zone: string;                 // Zone letter (A, B, C)
  officeNumber: string;         // Full office number (e.g., "3C-312")
  department: string;           // Department name
  extension?: string;           // Phone extension (optional)
  nearestLandmark?: string;     // Nearby landmark (optional)
  directions?: string;          // How to get there (optional)
}
```

### Current Mock Data
- 12 sample employees across all floors and zones
- Represents various departments (HR, IT, Finance, Legal, etc.)
- Includes realistic office numbers, extensions, and directions

---

## Data Requirements from Client

### Required Data Fields
1. **Employee Number** (Required)
   - Format: String (e.g., "10001")
   - Must be unique per employee
   - Used as primary search key

2. **Employee Name** (Required)
   - Format: String
   - Full name for personalized greeting

3. **Floor** (Required)
   - Format: Number (1-5 or as per actual building)
   - Ground floor = 1, First floor = 2, etc.

4. **Zone** (Required)
   - Format: String (A, B, C, or as per actual building layout)
   - Represents section/wing of the floor

5. **Office Number** (Required)
   - Format: String (e.g., "3C-312")
   - Recommended format: [Floor][Zone]-[Room Number]

6. **Department** (Required)
   - Format: String
   - Employee's department name

7. **Extension** (Optional but Recommended)
   - Format: String
   - Internal phone extension

8. **Nearest Landmark** (Optional but Recommended)
   - Format: String
   - Helps employees orient themselves (e.g., "East Elevator", "Main Lobby")

9. **Directions** (Optional but Recommended)
   - Format: String
   - Step-by-step directions from main entrance or elevator

### Data Format Options
The system can accept data in multiple formats:
- **JSON API endpoint** (Recommended for production)
- **CSV file** (for initial data import)
- **Database integration** (MySQL, PostgreSQL, etc.)
- **Excel spreadsheet** (can be converted)

### Sample Data Template (CSV)
```csv
employeeNumber,employeeName,floor,zone,officeNumber,department,extension,nearestLandmark,directions
10001,Ahmed Al-Mansouri,1,A,1A-101,Reception & Customer Service,1101,Main Entrance,Ground floor Zone A near the main entrance lobby
```

---

## Technical Assumptions

1. **Building Structure**:
   - 5 floors (Ground + 4 upper floors)
   - 3 zones per floor (A, B, C)
   - Can be easily modified for different configurations

2. **Authentication**:
   - Uses existing ProtectedRoute component
   - Requires user to be logged in
   - Can be modified for public access if needed

3. **Data Source**:
   - Currently uses static mock data in `officeLocations.ts`
   - Ready to integrate with API endpoint
   - Search is case-insensitive and trims whitespace

4. **Browser Support**:
   - Modern browsers (Chrome, Firefox, Safari, Edge)
   - ES2020+ JavaScript features
   - CSS Grid and Flexbox

5. **Performance**:
   - Client-side search (instant results)
   - Can handle 1000+ employees efficiently
   - For larger datasets, recommend server-side search

---

## Integration Steps for Production

### Option 1: API Integration (Recommended)
```typescript
// Replace mock data with API call
const findEmployeeByNumber = async (employeeNumber: string) => {
  const response = await fetch(`/api/employees/${employeeNumber}`);
  return await response.json();
};
```

### Option 2: Database Integration
- Connect to existing HR database
- Create view or stored procedure for employee locations
- Implement caching for better performance

### Option 3: File-based (Quick Start)
- Export employee data to JSON file
- Import into `officeLocations.ts`
- Update monthly or as needed

---

## Customization Options

### Building Configuration
Modify `BuildingVisualization.tsx` to change:
- Number of floors
- Number of zones
- Zone labels
- Floor labels

### Styling
All colors use Tailwind CSS classes and can be customized:
- Primary color: `qatari` (#8b0d32)
- Adjust in `tailwind.config.ts`

### Search Behavior
Modify `OfficeLocator.tsx` to:
- Add search by name
- Add department filter
- Add floor/zone filter
- Enable multiple search criteria

---

## Testing

### Test Employee Numbers
Use these employee numbers to test the feature:
- `10001` - Ground Floor, Zone A
- `10002` - 1st Floor, Zone B
- `10003` - 2nd Floor, Zone C
- `10004` - 3rd Floor, Zone A
- `10005` - 4th Floor, Zone B

### Test Scenarios
1. ✅ Valid employee number → Shows location
2. ✅ Invalid employee number → Shows error message
3. ✅ Empty input → Shows validation error
4. ✅ Reset and search again → Works correctly
5. ✅ Responsive design → Works on mobile/tablet
6. ✅ Dark mode → Displays correctly
7. ✅ Keyboard navigation → Fully accessible

---

## Future Enhancements (Optional)

1. **QR Code Integration**: Generate QR codes for each office
2. **Print Functionality**: Print office location card
3. **Email/Share**: Send location details via email
4. **Multi-language**: Arabic translation
5. **Floor Plans**: Add actual floor plan images
6. **Navigation**: Turn-by-turn directions
7. **Desk Booking**: Integration with hot-desking system
8. **Visitor Mode**: Allow visitors to find meeting rooms
9. **Analytics**: Track most searched locations
10. **Mobile App**: Native iOS/Android app

---

## Support & Maintenance

### Common Issues
- **Employee not found**: Verify employee number in database
- **Wrong location**: Update employee record in data source
- **Styling issues**: Clear browser cache, check Tailwind build

### Updates Required
- When employees move offices
- When new employees join
- When building layout changes
- When departments reorganize

---

## Contact & Questions

For technical questions or feature requests, please contact the development team.

**Branch**: `feature/office-locator`  
**Route**: `/locator`  
**Status**: ✅ Ready for testing and review

