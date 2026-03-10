## AI-assisted-Accessible-Dashboard 

Idea :  A web dashboard that analyzes and improves website accessibility.
Modern companies care a lot about accessibility (A11y), performance, and analytics. This project demonstrates:
HTML semantic structure
ARIA attributes
Responsive layouts
JavaScript data visualization
API usage
industry-level UI patterns


What the Application Does
1.Users can:
        Enter a website URL  
2.The app analyzes:
        Accessibility score
        ARIA usage
        Missing alt tags
        Color contrast
3.Display results in a dashboard


Features
1. Accessibility Scanner
Input a URL → show issues like:
              Missing alt attributes
              Improper heading hierarchy
              Missing labels in forms
              Low color contrast

Use APIs like:
              Google Lighthouse API
              WebAIM contrast API


Technologies Used
HTML:
      semantic tags
      ARIA attributes
CSS
      Use Grid for page layout      
      Use Flexbox for components

JavaScript
Functions:
          Fetch API
          DOM manipulation
          Charts
          Accessibility checking      
------------------------------------------------------------------------------------------------
Dashboard Components:
Accessibility Score Card
Score: 82 / 100
Status: Good
Issues List
⚠ Missing alt text (4 images)
⚠ Form without labels
⚠ Low contrast buttons

Chart
Use Chart.js to show -
Accessibility Score
Performance Score
SEO Score
Best Practices

-------------------------------------------------------------------------------------------------

Advanced Features :

1. Dark Mode
Use CSS variables.

2. Drag & Drop Widgets
Move dashboard cards.

3. Export Report
Download PDF accessibility report.

4. Progressive Web App
Add:
manifest.json
service worker

--------------------------------------------------------------------------------------------------
Project Folder Structure
a11y-dashboard
│
├── index.html
├── css
│   └── styles.css
├── js
│   ├── app.js
│   ├── charts.js
│   └── accessibility.js
├── components
│   └── dashboard.js
└── assets

















      
      
              
