// Comprehensive Client-Side Mock Axios Adapter for SchoolIQ Demo
// Intercepts all axios calls and routes them through a local storage virtual database.

// Helper to decode or parse bodies
function parseBody(data) {
  if (!data) return {};
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  }
  return data;
}

// Generate a valid base64-encoded mock JWT token containing user role/id/metadata
function makeMockToken(payload) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = btoa(
    JSON.stringify({
      ...payload,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 7 * 24 * 3600, // 7 days expiration
    })
  );
  const signature = btoa("mock-signature");
  return `${header}.${body}.${signature}`;
}

// Coordinate path for a route in Chennai (for live bus mapping)
const CHENNAI_ROUTE = [
  { lat: 13.0418, lng: 80.2341 }, // T. Nagar, Chennai
  { lat: 13.0435, lng: 80.2355 }, // Pondy Bazaar
  { lat: 13.0450, lng: 80.2370 }, // Nageswara Rao Park
  { lat: 13.0465, lng: 80.2385 }, // Panagal Park
  { lat: 13.0480, lng: 80.2400 }, // Kodambakkam
  { lat: 13.0495, lng: 80.2415 }, // Mahalingapuram
  { lat: 13.0510, lng: 80.2430 }, // Nungambakkam
  { lat: 13.0525, lng: 80.2445 }, // Nungambakkam High Road
  { lat: 13.0540, lng: 80.2460 }, // Valluvar Kottam
  { lat: 13.0555, lng: 80.2475 }, // Sterling Road
];

// Initialize Virtual DB in LocalStorage if not exists
function initVirtualDB() {
  if (!localStorage.getItem("db_initialized") || !localStorage.getItem("mock_lost_found")?.includes("Priya")) {
    // 1. Initial Homework list
    const initialHomework = [
      {
        id: "hw-1",
        title: "Algebraic Expressions Exercise 4.2",
        description: "Complete all questions from Section B of Chapter 4. Submit steps clearly in notes.",
        subject: "Mathematics",
        class_id: 1,
        section_id: 1,
        due_date: new Date(Date.now() + 24 * 3600 * 1000).toISOString().split("T")[0],
        status: "pending",
        teacher_name: "Sarah Connor",
        created_at: new Date().toISOString(),
      },
      {
        id: "hw-2",
        title: "Photosynthesis Diagram Drawing",
        description: "Draw the light-dependent reaction schematic in your laboratory workbook and label parts.",
        subject: "Science",
        class_id: 1,
        section_id: 1,
        due_date: new Date(Date.now() + 48 * 3600 * 1000).toISOString().split("T")[0],
        status: "submitted",
        teacher_name: "Sarah Connor",
        created_at: new Date().toISOString(),
      },
    ];

    // 2. Initial Attendance history
    const initialAttendance = [];
    // Populate past 30 days attendance (mostly present, some leave)
    for (let i = 30; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dayOfWeek = d.getDay();
      if (dayOfWeek !== 0) { // skip Sundays
        let status = "present";
        if (i === 12) status = "absent";
        if (i === 5) status = "leave";
        initialAttendance.push({
          date: d.toISOString().split("T")[0],
          status: status,
        });
      }
    }

    // 3. Initial AI generated papers history
    const initialAiHistory = [
      {
        id: "paper-1",
        title: "Grade 6 - Mathematics Term 1 Examination",
        class: "Class 6",
        subject: "Mathematics",
        marks: 50,
        difficulty: "Medium",
        sections: [
          {
            title: "Section A (Multiple Choice)",
            marks: 10,
            questions: [
              "1. What is the value of x if 2x + 5 = 15? (a) 5 (b) 10 (c) 15 (d) 20",
              "2. A triangle with three unequal sides is called: (a) Equilateral (b) Isosceles (c) Scalene (d) Right-angled",
            ],
          },
          {
            title: "Section B (Short Answers)",
            marks: 20,
            questions: [
              "1. Find the prime factors of 120 using prime factorization.",
              "2. Solve the equation: 3(y - 4) = 18.",
              "3. Draw a line segment AB of length 6.5 cm and bisect it.",
            ],
          },
          {
            title: "Section C (Long Answers)",
            marks: 20,
            questions: [
              "1. Explain the properties of parallel lines intersected by a transversal with neat sketches.",
              "2. The area of a rectangular field is 480 sq m. If its width is 16 m, find its perimeter.",
            ],
          },
        ],
        created_at: new Date(Date.now() - 3600000).toISOString(),
      },
    ];

    // 4. Lost and Found reports
    const initialLostFound = [
      {
        id: "lf-1",
        title: "Lost Blue Water Bottle",
        description: "Lost my blue water bottle in the Science Lab. It has a sticker of a rocket on it.",
        type: "lost",
        date: new Date().toISOString().split("T")[0],
        status: "OPEN",
        created_by: 20,
        Creator: {
          id: 20,
          name: "Priya",
          role: "student",
          avatar_url: "",
          student: {
            class: { class_name: "Class 6" },
            section: { name: "A" }
          }
        }
      },
      {
        id: "lf-2",
        title: "Black Pencil Case (Marvel)",
        description: "Found a black pencil case under the second row desks in Room 102.",
        type: "found",
        date: new Date(Date.now() - 24 * 3600 * 1000).toISOString().split("T")[0],
        status: "OPEN",
        created_by: 2,
        Creator: {
          id: 2,
          name: "Sarah Connor",
          role: "teacher",
          avatar_url: ""
        }
      }
    ];

    // 5. Teacher Approvals
    const initialApprovals = [
      {
        id: "app-1",
        student_name: "Jane Doe",
        type: "Leave Request",
        details: "Requires leave on Friday for sister's wedding.",
        status: "pending",
        date: new Date().toISOString().split("T")[0],
      },
    ];

    localStorage.setItem("mock_homework", JSON.stringify(initialHomework));
    localStorage.setItem("mock_attendance", JSON.stringify(initialAttendance));
    localStorage.setItem("mock_ai_history", JSON.stringify(initialAiHistory));
    localStorage.setItem("mock_lost_found", JSON.stringify(initialLostFound));
    localStorage.setItem("mock_approvals", JSON.stringify(initialApprovals));
    localStorage.setItem("db_initialized", "true");
  }
}

// Main mock router
export default function mockAdapter(config) {
  initVirtualDB();
  
  const rawUrl = config.url || "";
  // Strip host/baseURL to get relative path
  let path = rawUrl.replace(/^https?:\/\/[^\/]+/, "").replace(/^\/api/, "");
  if (!path.startsWith("/")) path = "/" + path;
  
  // Strip query parameters
  const [cleanPath, queryString] = path.split("?");
  const method = config.method ? config.method.toLowerCase() : "get";
  const body = parseBody(config.data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const responseData = handleRoute(method, cleanPath, body, config.params || {});
        if (responseData && responseData.error) {
          const err = new Error(responseData.error);
          err.response = {
            data: { message: responseData.error },
            status: responseData.status || 400,
            statusText: "Error",
            headers: {},
            config: config,
          };
          reject(err);
        } else {
          resolve({
            data: responseData,
            status: 200,
            statusText: "OK",
            headers: { "content-type": "application/json" },
            config: config,
            request: {},
          });
        }
      } catch (err) {
        console.error("Mock router error:", err);
        reject({
          response: {
            data: { message: "Internal mock engine error: " + err.message },
            status: 500,
            statusText: "Internal Error",
            headers: {},
            config: config,
          },
        });
      }
    }, 300); // add 300ms realistic network latency
  });
}

function handleRoute(method, path, body, queryParams) {
  console.log(`Mock DB Request: [${method.toUpperCase()}] ${path}`, { body, queryParams });

  // 1. Auth Endpoint
  if (path === "/auth/login" && method === "post") {
    const username = (body.username || "").trim().toLowerCase();
    
    let role = "student";
    let name = "Jane Doe";
    let id = 1;
    
    if (username.includes("teacher")) {
      role = "teacher";
      name = "Sarah Connor";
      id = 2;
    } else if (username.includes("driver")) {
      role = "driver";
      name = "John Doe";
      id = 3;
    }
    
    const token = makeMockToken({
      id,
      username,
      role,
      name,
      class_id: 1,
      section_id: 1,
    });
    
    return { token, user: { id, username, role, name } };
  }

  if (path === "/auth/change-password" && method === "post") {
    return { success: true, message: "Password updated successfully!" };
  }

  // 2. Profile endpoints
  if (path === "/students/me" && method === "get") {
    return {
      id: 1,
      name: "Jane Doe",
      username: "student",
      role: "student",
      class_id: 1,
      section_id: 1,
      class: { class_name: "6" },
      section: { name: "A" },
      roll_no: "101",
      dob: "2015-05-12",
      gender: "female",
      blood_group: "O+",
      residential_status: "day_scholar",
      address: "12, Peelamedu Main Road, Peelamedu, Coimbatore - 641004",
      father_name: "Robert Doe",
      mother_name: "Mary Doe",
      emergency_contact: "9876543212",
      avatar_url: "",
      approval_status: "approved",
      phone: "9876543210",
      email: "jane.doe@schooliq.com",
    };
  }

  if (path === "/teachers/me" && method === "get") {
    return {
      id: 2,
      name: "Sarah Connor",
      username: "teacher",
      role: "teacher",
      designation: "Senior Mathematics Teacher",
      dob: "1988-11-23",
      gender: "female",
      blood_group: "A-",
      address: "45-A, Nehru Nagar, Kalapatti, Coimbatore - 641014",
      avatar_url: "",
      approval_status: "approved",
      phone: "9876543211",
      email: "sarah.connor@schooliq.com",
    };
  }

  if (path === "/driver/transport/profile" && method === "get") {
    return {
      id: 3,
      name: "John Doe",
      role: "driver",
      phone: "9876543212",
      vehicle_no: "TN-37-AB-1234",
    };
  }

  // 3. Dashboards
  if (path === "/students/dashboard" && method === "get") {
    const hws = JSON.parse(localStorage.getItem("mock_homework") || "[]");
    const pendCount = hws.filter(h => h.status === "pending").length;

    return {
      student: { name: "Jane Doe", class: "6", section: "A" },
      metrics: {
        attendance: { percentage: 93.5 },
        ai_tokens: { remaining: 840, used: 160, total: 1000 },
        homework_pending: pendCount,
        performance: {
          trend: [
            { exam: "Unit Test 1", percentage: 82 },
            { exam: "Quarterly", percentage: 88 },
            { exam: "Unit Test 2", percentage: 91 },
          ],
          subject_averages: [
            { subject: "Mathematics", score: 94 },
            { subject: "Science", score: 88 },
            { subject: "Social Science", score: 82 },
            { subject: "English", score: 90 },
            { subject: "Tamil", score: 86 },
          ],
          latest_exam: { name: "Unit Test 2", score: "91%" },
          focus_subject: { name: "Social Science", message: "Review history timelines and complete the assignment." },
          strong_subject: { name: "Mathematics", message: "Excelling in geometry and algebra." },
          weak_syllabus: "Chapter 5: Water resources needs a refresher.",
        },
      },
    };
  }

  if (path === "/teachers/dashboard" && method === "get") {
    const approvals = JSON.parse(localStorage.getItem("mock_approvals") || "[]");
    const pendingApp = approvals.filter(a => a.status === "pending").length;

    return {
      ai_tokens: { remaining: 1250, used: 750, total: 2000 },
      pending_report_cards: 12,
      homework_summary: [
        { subject: "Mathematics", pending: 4, submitted: 22 },
        { subject: "Science", pending: 2, submitted: 24 },
      ],
      pending_approvals_count: pendingApp,
    };
  }

  // 4. Notifications & Posters
  if (path === "/notifications/active-posters" && method === "get") {
    return {
      success: true,
      data: [],
    };
  }

  if (path === "/notifications" && method === "get") {
    return {
      success: true,
      data: [
        { id: 101, title: "Homework Assigned", message: "Sarah Connor assigned Mathematics Homework due tomorrow.", date: "Today" },
        { id: 102, title: "Report Card Available", message: "Unit Test 2 report cards are published.", date: "Yesterday" },
      ],
    };
  }

  if (path === "/notifications/mark-all-read" && method === "post") {
    return { success: true };
  }

  // 5. Homework / Diary
  if (path === "/homework" && method === "get") {
    const hws = JSON.parse(localStorage.getItem("mock_homework") || "[]");
    return hws;
  }

  if (path === "/homework" && method === "post") {
    const hws = JSON.parse(localStorage.getItem("mock_homework") || "[]");
    const newItem = {
      id: "hw-" + Date.now(),
      title: body.title || "Untiled Homework",
      description: body.description || "",
      subject: body.subject || "Mathematics",
      class_id: body.class_id || 1,
      section_id: body.section_id || 1,
      due_date: body.due_date || new Date().toISOString().split("T")[0],
      status: "pending",
      teacher_name: "Sarah Connor",
      created_at: new Date().toISOString(),
    };
    hws.unshift(newItem);
    localStorage.setItem("mock_homework", JSON.stringify(hws));
    return newItem;
  }

  if (path.match(/^\/homework\/[^\/]+\/submit$/) && method === "post") {
    const hwId = path.split("/")[2];
    const hws = JSON.parse(localStorage.getItem("mock_homework") || "[]");
    const item = hws.find(h => h.id === hwId);
    if (item) {
      item.status = "submitted";
      localStorage.setItem("mock_homework", JSON.stringify(hws));
      return { success: true, data: item };
    }
    return { error: "Homework not found" };
  }

  if (path === "/homework/analytics/summary" && method === "get") {
    return { pending: 3, submitted: 18, total: 21 };
  }

  if (path.match(/^\/homework\/analytics\/[^\/]+\/students$/) && method === "get") {
    return [
      { student_id: 1, name: "Jane Doe", roll_no: "101", submitted: true, submitted_at: "Yesterday" },
      { student_id: 4, name: "Bob Smith", roll_no: "102", submitted: false, submitted_at: null },
      { student_id: 5, name: "Alice Green", roll_no: "103", submitted: true, submitted_at: "Today" },
    ];
  }

  // 6. Timetables & Classes
  if (path === "/timetables/section" && method === "get") {
    const today = new Date().toLocaleString("en-US", { weekday: "long" }).toLowerCase();
    const timetable = {
      monday: [
        { id: 1, period: 1, subject: { name: "Mathematics" }, teacher: { name: "Sarah Connor" }, time_start: "09:00:00", time_end: "09:45:00" },
        { id: 2, period: 2, subject: { name: "Science" }, teacher: { name: "Ravi Kumar" }, time_start: "09:45:00", time_end: "10:30:00" },
      ],
      tuesday: [
        { id: 3, period: 1, subject: { name: "Science" }, teacher: { name: "Ravi Kumar" }, time_start: "09:00:00", time_end: "09:45:00" },
        { id: 4, period: 2, subject: { name: "Mathematics" }, teacher: { name: "Sarah Connor" }, time_start: "09:45:00", time_end: "10:30:00" },
      ],
      wednesday: [
        { id: 5, period: 1, subject: { name: "Mathematics" }, teacher: { name: "Sarah Connor" }, time_start: "09:00:00", time_end: "09:45:00" },
      ],
      thursday: [
        { id: 6, period: 1, subject: { name: "Science" }, teacher: { name: "Ravi Kumar" }, time_start: "09:00:00", time_end: "09:45:00" },
      ],
      friday: [
        { id: 7, period: 1, subject: { name: "English" }, teacher: { name: "Nancy D" }, time_start: "09:00:00", time_end: "09:45:00" },
      ],
      saturday: [
        { id: 8, period: 1, subject: { name: "Mathematics" }, teacher: { name: "Sarah Connor" }, time_start: "09:00:00", time_end: "09:45:00" },
      ],
      sunday: [
        { id: 9, period: 1, subject: { name: "Mathematics" }, teacher: { name: "Sarah Connor" }, time_start: "09:00:00", time_end: "09:45:00" },
      ]
    };
    
    // Ensure current day has items
    if (!timetable[today] || timetable[today].length === 0) {
      timetable[today] = [
        { id: 99, period: 1, subject: { name: "Mathematics" }, teacher: { name: "Sarah Connor" }, time_start: "09:00:00", time_end: "09:45:00" },
        { id: 100, period: 2, subject: { name: "Science" }, teacher: { name: "Ravi Kumar" }, time_start: "09:45:00", time_end: "10:30:00" },
      ];
    }

    return {
      success: true,
      data: timetable
    };
  }

  if (path === "/timetables/teacher/me" && method === "get") {
    const today = new Date().toLocaleString("en-US", { weekday: "long" }).toLowerCase();
    const timetable = {};
    timetable[today] = [
      { id: 1, day: today, period: 1, subject: { name: "Mathematics" }, class: { id: 1, class_name: "6" }, section: { id: 1, name: "A" }, time_start: "09:00:00", time_end: "09:45:00" },
      { id: 2, day: today, period: 3, subject: { name: "Mathematics" }, class: { id: 2, class_name: "7" }, section: { id: 2, name: "B" }, time_start: "10:45:00", time_end: "11:30:00" },
    ];
    return {
      success: true,
      data: timetable
    };
  }

  if (path === "/teacher-assignments/teacher/me" && method === "get") {
    return {
      success: true,
      data: [
        {
          id: 1,
          class_id: 1,
          section_id: 1,
          subject_id: 1,
          class: { id: 1, class_name: "6" },
          section: { id: 1, name: "A" },
          subject: { id: 1, name: "Mathematics" }
        },
        {
          id: 2,
          class_id: 2,
          section_id: 2,
          subject_id: 2,
          class: { id: 2, class_name: "7" },
          section: { id: 2, name: "B" },
          subject: { id: 2, name: "Science" }
        }
      ]
    };
  }

  if (path.match(/^\/teacher-assignments\/section\/[^\/]+$/) && method === "get") {
    return {
      success: true,
      data: [
        { id: 1, subject_name: "Mathematics" },
        { id: 2, subject_name: "Science" },
      ]
    };
  }

  // 7. Exams & Report cards
  if (path === "/exams" && method === "get") {
    return {
      success: true,
      items: [
        {
          id: 100,
          name: "Quarterly Examination",
          is_locked: true,
          exam_subjects: [
            { subject_id: 1, subject: { name: "Mathematics" }, exam_date: "2026-06-15", max_marks: 100, syllabus: "Chapters 1 to 5: Algebra, Geometry, Fractions." },
            { subject_id: 2, subject: { name: "Science" }, exam_date: "2026-06-16", max_marks: 100, syllabus: "Chapters 1 to 4: Life processes, Chemical equations." }
          ]
        },
        {
          id: 101,
          name: "Unit Test 2",
          is_locked: false,
          exam_subjects: [
            { subject_id: 1, subject: { name: "Mathematics" }, exam_date: "2026-07-20", max_marks: 50, syllabus: "Chapter 6: Trigonometry basics." }
          ]
        }
      ]
    };
  }

  if (path === "/report-cards/grading-scales" && method === "get") {
    return {
      success: true,
      data: [
        { grade_name: "A+", min_percentage: 91, is_pass: true, description: "Outstanding" },
        { grade_name: "A", min_percentage: 81, is_pass: true, description: "Excellent" },
        { grade_name: "B", min_percentage: 61, is_pass: true, description: "Good" },
        { grade_name: "C", min_percentage: 51, is_pass: true, description: "Satisfactory" },
        { grade_name: "F", min_percentage: 0, is_pass: false, description: "Fail" }
      ]
    };
  }

  if (path === "/report-cards" && method === "get") {
    return {
      success: true,
      data: [
        { id: 1, student_id: 1, student_name: "Jane Doe", roll_no: "101", mark: 94, grade: "A+", remarks: "Excellent performance in math." },
        { id: 2, student_id: 4, student_name: "Bob Smith", roll_no: "102", mark: 72, grade: "B+", remarks: "Can improve with practice." }
      ]
    };
  }

  if (path === "/report-cards/bulk-marks" && method === "post") {
    return { success: true, message: "Marks saved successfully" };
  }

  if (path === "/report-cards/student/list" && method === "get") {
    return {
      success: true,
      data: [
        {
          id: 100,
          exam_id: 100,
          exam: { id: 100, name: "Quarterly Examination" },
          marks: [
            { subject_id: 1, marks_obtained: 95, max_marks: 100, subject: { name: "Mathematics" } },
            { subject_id: 2, marks_obtained: 82, max_marks: 100, subject: { name: "Science" } }
          ],
          percentage: 88,
          average_grade: "A"
        },
        {
          id: 101,
          exam_id: 101,
          exam: { id: 101, name: "Unit Test 2" },
          marks: [
            { subject_id: 1, marks_obtained: 48, max_marks: 50, subject: { name: "Mathematics" } }
          ],
          percentage: 96,
          average_grade: "A+"
        }
      ]
    };
  }

  if (path.match(/^\/report-cards\/[^\/]+$/) && method === "get") {
    const rcId = path.split("/")[2];
    return {
      id: rcId,
      exam_name: "Unit Test 2",
      student_name: "Jane Doe",
      roll_no: "101",
      class_name: "6-A",
      results: [
        { subject: "Mathematics", marks: 95, max_marks: 100, grade: "A+", remarks: "Outstanding" },
        { subject: "Science", marks: 89, max_marks: 100, grade: "A", remarks: "Great work" },
        { subject: "Social Science", marks: 82, max_marks: 100, grade: "A", remarks: "Good effort" },
        { subject: "English", marks: 92, max_marks: 100, grade: "A+", remarks: "Exceptional" },
        { subject: "Tamil", marks: 88, max_marks: 100, grade: "A", remarks: "Very good" },
      ],
      total_marks: 446,
      max_total: 500,
      percentage: 89.2,
      grade: "A",
      attendance_percentage: 94.0,
      teacher_remarks: "Jane has shown tremendous growth, especially in logic-based subjects like Maths and English. Keep it up!",
    };
  }

  // 8. Analytics
  if (path === "/analytics/student" && method === "get") {
    return {
      success: true,
      data: {
        academic_percentage: 89.2,
        attendance_percentage: 94,
        rank: 3,
        total_students: 32,
        improvement: {
          previous_exam: "Quarterly Examination",
          previous: 86.5,
          current_exam: "Unit Test 2",
          current: 89.2,
          change: 2.7
        },
        strong_subject: {
          subject: "Mathematics",
          score: 95,
          change: 3.0
        },
        focus_subject: {
          subject: "Social Science",
          score: 82,
          change: -1.5
        },
        trends: [
          { exam: "Unit Test 1", score: 82 },
          { exam: "Quarterly", score: 88 },
          { exam: "Unit Test 2", score: 91 }
        ],
        radar: [
          { subject: "Mathematics", score: 95, fullMark: 100 },
          { subject: "Science", score: 89, fullMark: 100 },
          { subject: "Social Science", score: 82, fullMark: 100 },
          { subject: "English", score: 92, fullMark: 100 },
          { subject: "Tamil", score: 88, fullMark: 100 }
        ],
        leaderboard: [
          { rank: 1, name: "Alice Green", score: 482, avatar_url: "", is_me: false },
          { rank: 2, name: "Bob Smith", score: 464, avatar_url: "", is_me: false },
          { rank: 3, name: "Jane Doe", score: 446, avatar_url: "", is_me: true }
        ]
      }
    };
  }

  if (path === "/analytics/teacher/class" && method === "get") {
    return {
      class_average: 84.5,
      pass_percentage: 100,
      subject_averages: [
        { subject: "Mathematics", score: 86 },
        { subject: "Science", score: 82 },
      ],
      top_performers: [
        { name: "Jane Doe", score: 94 },
        { name: "Alice Green", score: 92 },
      ],
      critical_students: [
        { name: "Bob Smith", score: 62, remarks: "Needs support in arithmetic fractions." },
      ],
    };
  }

  // 9. AI Tools & RAG Chat
  if (path === "/quiz/generate" && method === "post") {
    const topic = body.topic || "General";
    return {
      success: true,
      questions: [
        {
          id: 1,
          question: `Which of the following represents a key concept in ${topic}?`,
          options: ["Option A (Correct)", "Option B", "Option C", "Option D"],
          correctOptionIndex: 0,
          explanation: `Option A is correct because it aligns with the core principles of ${topic}.`,
        },
        {
          id: 2,
          question: `In the study of ${topic}, what is a typical challenge?`,
          options: ["Overfitting", "Data scarcity", "Hypothesis testing (Correct)", "Gradient descent"],
          correctOptionIndex: 2,
          explanation: `Hypothesis testing represents a standard scientific challenge in analyzing ${topic}.`,
        },
        {
          id: 3,
          question: `True or False: ${topic} plays a vital role in modern science.`,
          options: ["True (Correct)", "False"],
          correctOptionIndex: 0,
          explanation: `It is widely documented that ${topic} is critical to modern research.`,
        },
        {
          id: 4,
          question: `What is the primary formula related to ${topic}?`,
          options: ["E = mc²", "F = ma", "PV = nRT", "Specific to context (Correct)"],
          correctOptionIndex: 3,
          explanation: `Formulas differ based on specific branches of ${topic}.`,
        },
        {
          id: 5,
          question: `Which scholar pioneered early research in ${topic}?`,
          options: ["Isaac Newton", "Albert Einstein", "Marie Curie", "Context Expert (Correct)"],
          correctOptionIndex: 3,
          explanation: `Initial breakthroughs are attributed to specialists in ${topic}.`,
        },
      ],
    };
  }

  if (path === "/teacher/ai" && method === "post") {
    const aiType = body.aiType;
    const payload = body.payload || {};
    
    if (aiType === "question-paper") {
      const title = `${payload.class} ${payload.subject} Question Paper`;
      const topic = payload.topic || "Algebra & Geometry";
      const totalMarks = payload.marks || 50;
      
      const newPaper = {
        id: "paper-" + Date.now(),
        title: title,
        class: payload.class,
        subject: payload.subject,
        marks: totalMarks,
        difficulty: payload.difficulty || "Medium",
        sections: [
          {
            title: "Section A (Multiple Choice Questions) - 10 Marks",
            marks: 10,
            questions: [
              `1. What is the derivative or fundamental root of ${topic}? (a) A1 (b) B2 (c) C3 (d) D4`,
              `2. Solve the basic ratio in ${topic} matching 3:4. (a) 6:8 (b) 9:12 (c) Both (d) None`,
            ],
          },
          {
            title: "Section B (Short Answer Questions) - 20 Marks",
            marks: 20,
            questions: [
              `1. State the three main tenets or formulas governing ${topic}.`,
              `2. Prove why the ratio holds true under ordinary parameters.`,
              `3. Graph the distribution showing key vertices of ${topic}.`,
            ],
          },
          {
            title: "Section C (Detailed Analytical Questions) - 20 Marks",
            marks: 20,
            questions: [
              `1. Formulate a real-world scenario where ${topic} is utilized to resolve a production-grade problem. Draw diagrams.`,
              `2. Critique the historical developments of ${topic} and list its modern applications.`,
            ],
          },
        ],
        created_at: new Date().toISOString(),
      };
      
      const history = JSON.parse(localStorage.getItem("mock_ai_history") || "[]");
      history.unshift(newPaper);
      localStorage.setItem("mock_ai_history", JSON.stringify(history));
      
      return { success: true, data: newPaper };
    }
    
    return { success: true, data: { text: "AI operation completed successfully." } };
  }

  if (path === "/teacher/ai/history" && method === "get") {
    const history = JSON.parse(localStorage.getItem("mock_ai_history") || "[]");
    return history;
  }

  if (path === "/rag/ask" && method === "post") {
    const question = (body.question || "").toLowerCase();
    
    let answer = "I am your patient AI Tutor. I can explain complex textbook concepts in multiple ways, using plain English or Tamil. Ask me anything about your syllabus!";
    
    if (question.includes("gravity") || question.includes("ஈர்ப்பு")) {
      answer = `### 🍎 Gravity / ஈர்ப்பு விசை

**English**: Gravity is an invisible force that pulls objects toward each other. It is what keeps your feet on the ground and what makes an apple fall from a tree to the Earth. The massive weight of the Earth pulls all objects towards its center.

**Tamil**: ஈர்ப்பு விசை என்பது பொருட்களை ஒன்றோடொன்று ஈர்க்கும் ஒரு கண்ணுக்குத் தெரியாத விசையாகும். இதுவே நம் கால்களை தரையில் நிலைநிறுத்துகிறது மற்றும் மரத்திலிருந்து ஒரு ஆப்பிள் பூமிக்கு கீழே விழுவதற்குக் காரணமாகிறது. பூமியின் மிகப்பெரிய நிறை அனைத்துப் பொருட்களையும் அதன் மையத்தை நோக்கி ஈர்க்கிறது.

Would you like another example, or a simple question to test your understanding?`;
    } else if (question.includes("photosynthesis") || question.includes("ஒளிச்சேர்க்கை")) {
      answer = `### 🌿 Photosynthesis / ஒளிச்சேர்க்கை

**English**: Photosynthesis is the chemical process by which green plants use sunlight, water, and carbon dioxide to synthesize food (glucose) and release oxygen. It happens inside the chloroplasts in leaf cells.

**Tamil**: ஒளிச்சேர்க்கை என்பது பசுமையான தாவரங்கள் சூரிய ஒளி, நீர் மற்றும் கார்பன் டை ஆக்சைடு ஆகியவற்றைப் பயன்படுத்தி உணவைத் (குளுக்கோஸ்) தயாரித்து, ஆக்ஸிஜனை வெளியிடும் ஒரு இரசாயன செயல்முறையாகும். இது இலை செல்களில் உள்ள பசுங்கணிகங்களில் (chloroplasts) நடைபெறுகிறது.

Do you want to know about the light-dependent and light-independent cycles?`;
    } else if (question.includes("hi") || question.includes("hello") || question.includes("வணக்கம்")) {
      answer = `Hello! I am your AI Study Companion. How can I help you today?
      
வணக்கம்! நான் உங்கள் ஏஐ கற்பித்தல் துணையாக இருக்கிறேன். இன்று நான் உங்களுக்கு எவ்வாறு உதவட்டும்?
      
You can ask me questions about **Gravity (ஈர்ப்பு)**, **Photosynthesis (ஒளிச்சேர்க்கை)**, or any other topic from your textbook!`;
    }
    
    return { answer };
  }

  // 10. Transport
  if (path === "/student/transport/me" && method === "get") {
    const activeTrip = {
      id: 1,
      trip_type: "pickup",
      started_at: new Date().toISOString(),
      status: "active",
      vehicle: {
        vehicle_name: "Bus 1",
        registration_no: "TN 56",
        driver: {
          user: {
            name: "John Doe",
            phone: "9876543210"
          }
        }
      }
    };
    
    return {
      success: true,
      data: {
        id: 1,
        student_id: 1,
        vehicle_id: 1,
        stop_name: "T. Nagar Bus Stop",
        route_name: "Route 4 (Chennai Express)",
        google_maps_enabled: false,
        trip_id: activeTrip.id,
        active_trip: activeTrip,
        driver: {
          name: "John Doe",
          phone: "9876543210",
          avatar_url: "",
        },
        vehicle: {
          vehicle_name: "Bus 1",
          vehicle_number: "TN 56",
          driver: {
            user: {
              name: "John Doe",
              phone: "9876543210"
            }
          }
        }
      },
    };
  }

  if (path.match(/^\/student\/transport\/students\/[^\/]+$/) && method === "get") {
    const activeTrip = {
      id: 1,
      trip_type: "pickup",
      started_at: new Date().toISOString(),
      status: "active"
    };
    return {
      success: true,
      data: {
        id: 1,
        route_name: "Route 4 (Chennai Express)",
        trip_id: activeTrip.id,
        active_trip: activeTrip,
        google_maps_enabled: false,
        transport: {
          id: 1,
          route_name: "Route 4 (Chennai Express)",
          pickup_point: "T. Nagar Main Road",
          pickup_time: "08:15:00",
          drop_time: "16:45:00",
          vehicle: {
            vehicle_name: "Bus 1",
            vehicle_number: "TN 56",
            driver: {
              user: {
                name: "John Doe",
                phone: "9876543210"
              }
            }
          }
        }
      },
    };
  }

  if (path === "/student/transport/vehicles" && method === "get") {
    return {
      success: true,
      data: [
        { id: 1, vehicle_no: "TN 56", driver_name: "John Doe", route_name: "Route 4" },
      ],
    };
  }

  if (path === "/student/transport/requests" && method === "post") {
    return { success: true, message: "Transport request submitted" };
  }

  if (path.match(/^\/student\/transport\/trips\/[^\/]+\/location$/) && method === "get") {
    const streamedLoc = JSON.parse(localStorage.getItem("driver_gps") || "null");
    
    if (streamedLoc && (Date.now() - streamedLoc.timestamp < 10000)) {
      return {
        success: true,
        data: {
          latitude: streamedLoc.latitude,
          longitude: streamedLoc.longitude,
          speed: streamedLoc.speed || 0,
        },
      };
    } else {
      const timeIndex = Math.floor(Date.now() / 3000) % CHENNAI_ROUTE.length;
      const coord = CHENNAI_ROUTE[timeIndex];
      return {
        success: true,
        data: {
          latitude: coord.lat,
          longitude: coord.lng,
          speed: 35,
        },
      };
    }
  }

  // Driver endpoints
  if (path === "/driver/transport/vehicle" && method === "get") {
    return {
      success: true,
      data: {
        id: 1,
        vehicle_no: "TN-37-AB-1234",
        route_name: "Route 4",
      },
    };
  }

  if (path === "/driver/transport/active-trip" && method === "get") {
    const activeTrip = JSON.parse(localStorage.getItem("active_trip") || "null");
    return {
      success: true,
      data: activeTrip,
    };
  }

  if (path === "/driver/transport/trips/start" && method === "post") {
    const newTrip = {
      id: "trip-" + Date.now(),
      vehicle_id: 1,
      start_time: new Date().toISOString(),
      status: "active",
    };
    localStorage.setItem("active_trip", JSON.stringify(newTrip));
    return {
      success: true,
      data: newTrip,
    };
  }

  if (path.match(/^\/driver\/transport\/trips\/[^\/]+\/stop$/) && method === "post") {
    localStorage.removeItem("active_trip");
    localStorage.removeItem("driver_gps");
    return {
      success: true,
      message: "Trip ended successfully",
    };
  }

  if (path.match(/^\/driver\/transport\/trips\/[^\/]+\/location$/) && method === "post") {
    const gpsLoc = {
      latitude: body.latitude,
      longitude: body.longitude,
      speed: body.speed || 40,
      timestamp: Date.now(),
    };
    localStorage.setItem("driver_gps", JSON.stringify(gpsLoc));
    return {
      success: true,
    };
  }

  // 11. Single Player Quiz
  if (path === "/game/quiz/single/start" && method === "post") {
    const subject = body.subject || "General";
    return {
      success: true,
      data: {
        sessionId: "quiz-session-" + Date.now(),
        subject: subject,
        questions: [
          { id: 201, question: "What is 7 multiplied by 8?", options: ["48", "54", "56", "62"], seconds: 15 },
          { id: 202, question: "Which organ filters blood in the human body?", options: ["Heart", "Lungs", "Kidneys", "Liver"], seconds: 15 },
          { id: 203, question: "What is the capital of India?", options: ["Mumbai", "Kolkata", "Chennai", "New Delhi"], seconds: 15 },
        ],
      },
    };
  }

  if (path === "/game/quiz/single/submit" && method === "post") {
    return {
      success: true,
      data: {
        correctCount: 2,
        totalCount: 3,
        xpGained: 50,
        coinsGained: 10,
        leaderboardRank: 4,
      },
    };
  }

  if (path.match(/^\/game\/quiz\/[^\/]+\/leaderboard$/) && method === "get") {
    return {
      success: true,
      data: [
        { rank: 1, name: "Alice Green", score: 280, timeTaken: "24s" },
        { rank: 2, name: "Bob Smith", score: 240, timeTaken: "29s" },
        { rank: 3, name: "Charlie Red", score: 190, timeTaken: "32s" },
        { rank: 4, name: "Jane Doe (You)", score: 180, timeTaken: "28s" },
      ],
    };
  }

  if (path === "/game/quiz/history" && method === "get") {
    return {
      success: true,
      data: [
        { id: 1, subject: "Mathematics", score: "2/3", xp: 50, date: "Today" },
        { id: 2, subject: "Science", score: "3/3", xp: 100, date: "Yesterday" },
      ],
    };
  }

  // Multiplayer Quiz mock
  if (path === "/game/quiz/multi/create" && method === "post") {
    return {
      success: true,
      data: {
        roomCode: "IQ7788",
        hostId: 1,
        players: [{ id: 1, name: "Jane Doe" }],
      },
    };
  }

  if (path === "/game/quiz/multi/join" && method === "post") {
    return {
      success: true,
      data: {
        roomCode: body.roomCode || "IQ7788",
        players: [
          { id: 4, name: "Alice Green" },
          { id: 5, name: "Bob Smith" },
          { id: 1, name: "Jane Doe" },
        ],
      },
    };
  }

  // 12. Lost & Found
  if (path === "/lost-found" && method === "get") {
    const list = JSON.parse(localStorage.getItem("mock_lost_found") || "[]");
    return list;
  }

  // 13. Approvals
  if (path === "/approvals" && method === "get") {
    const list = JSON.parse(localStorage.getItem("mock_approvals") || "[]");
    return list;
  }

  if (path.match(/^\/approvals\/[^\/]+\/(approve|reject)$/) && method === "post") {
    const split = path.split("/");
    const appId = split[2];
    const action = split[3];
    
    const list = JSON.parse(localStorage.getItem("mock_approvals") || "[]");
    const item = list.find(a => a.id === appId);
    if (item) {
      item.status = action === "approve" ? "approved" : "rejected";
      localStorage.setItem("mock_approvals", JSON.stringify(list));
      return { success: true, data: item };
    }
    return { error: "Approval item not found" };
  }

  // 14. Attendance endpoints (logging)
  if (path === "/attendance" && method === "get") {
    const records = JSON.parse(localStorage.getItem("mock_attendance") || "[]");
    return records;
  }

  if (path === "/attendance/bulk" && method === "post") {
    // Bulk attendance log
    const date = body.date || new Date().toISOString().split("T")[0];
    const studentsList = body.students || []; // [{ student_id, status }]
    
    // Save locally
    const teacherAttendance = JSON.parse(localStorage.getItem("mock_teacher_attendance_log") || "{}");
    teacherAttendance[date] = studentsList;
    localStorage.setItem("mock_teacher_attendance_log", JSON.stringify(teacherAttendance));
    
    return { success: true, message: "Attendance registered successfully for " + date };
  }

  if (path === "/students/attendance/summary" && method === "get") {
    const records = JSON.parse(localStorage.getItem("mock_attendance") || "[]");
    return { items: records };
  }

  if (path === "/teachers/attendance/summary" && method === "get") {
    const records = JSON.parse(localStorage.getItem("mock_attendance") || "[]");
    return { items: records };
  }

  if (path === "/parents/attendance/summary" && method === "get") {
    const records = JSON.parse(localStorage.getItem("mock_attendance") || "[]");
    return { items: records };
  }

  if (path === "/teachers/attendance/daily" && method === "get") {
    return {
      success: true,
      students: [
        { id: 1, name: "Jane Doe", roll_no: "101", status: "present" },
        { id: 4, name: "Bob Smith", roll_no: "102", status: "present" },
        { id: 5, name: "Alice Green", roll_no: "103", status: "absent" }
      ],
      last_updated_by: "Sarah Connor",
      last_updated_at: new Date().toISOString()
    };
  }

  if (path === "/classes" && method === "get") {
    return {
      success: true,
      data: [{ id: 1, class_name: "6" }, { id: 2, class_name: "7" }]
    };
  }

  if (path.match(/^\/sections\/classes\/[^\/]+\/sections$/) && method === "get") {
    return {
      success: true,
      data: [{ id: 1, name: "A" }]
    };
  }

  // 15. Group Chat endpoints
  if (path === "/group-chat" && method === "get") {
    return {
      success: true,
      items: [
        {
          id: 10,
          chatId: 10,
          subject: { id: 1, name: "Mathematics" },
          class: { id: 1, class_name: "6" },
          section: { id: 1, name: "A" }
        },
        {
          id: 11,
          chatId: 11,
          subject: { id: 2, name: "Science" },
          class: { id: 1, class_name: "6" },
          section: { id: 1, name: "A" }
        }
      ]
    };
  }

  if (path.match(/^\/group-chat\/[^\/]+\/messages$/) && method === "get") {
    const split = path.split("/");
    const chatId = Number(split[2]);
    if (chatId === 10) {
      return [
        { id: 1, sender_id: 2, sender_name: "Sarah Connor", sender_avatar: "", content: "Hi Class 6-A, welcome to the Mathematics group chat. Please finish Exercise 4.2 by tomorrow.", type: "text", created_at: new Date(Date.now() - 3600000).toISOString() }
      ];
    } else {
      return [
        { id: 2, sender_id: 2, sender_name: "Sarah Connor", sender_avatar: "", content: "Hi Class 6-A, please draw the photosynthesis diagram in your workbook for tomorrow's class.", type: "text", created_at: new Date(Date.now() - 3600000).toISOString() }
      ];
    }
  }

  // Fallback / NotFound error response
  return { error: `Endpoint mock not defined: [${method.toUpperCase()}] ${path}`, status: 404 };
}
