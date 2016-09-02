<!DOCTYPE html>
<html>

<head>
  <title>Simulation of Impact of Charter Opening on Traditional District Finances</title>
  <meta property="og:url" content="http://jcalz.github.io/schoolmodel" />
  <meta property="og:title" content="Simulation of Impact of Charter Opening on Traditional District Finances" />
  <meta property="og:description" content="This page simulates the effect of charter school opening on the finances of public school districts. When students
    leave a traditional district to a charter, their per pupil state and local funding follows them and the sending district must find places to cut."
  />
  <meta property="og:image" content="http://jcalz.github.io/schoolmodel/img/exampleCharts.png" />
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="https://code.jquery.com/jquery-2.2.3.min.js">
  </script>
  <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js">
  </script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js">
  </script>
  <script src="js/util.js">
  </script>
  <style>
    html {
      font-family: Arial, Helvetica, sans-serif;
    }
    
    label {
      display: inline-block;
      width: 80%;
      text-align: right;
    }
    
    .chart {
      width: 80%;
      height: 200px;
      border: 1px solid black;
    }
    
    .details .summary {
      border: 1px solid black;
      background-color: #DDDDDD;
      font-weight: bold;
      cursor: pointer;
    }
    
    .details.main {
      width: 80%;
      margin: 10px;
    }
    
    .details {
      border: 1px solid black;
      margin: 3px;
    }
    
    .details:not([open])>.detailText {
      display: none;
    }
    
    .details:not([open])>.summary .triangleIcon:before {
      content: "\25ba";
    }
    
    .details[open]>.summary .triangleIcon:before {
      content: "\25bc";
    }
    
    .enrollmentTable {
      font-size: 50%;
      border-collapse: collapse;
    }
    
    .enrollmentTable td,
    .enrollmentTable th {
      border: 1px solid black;
      padding: 0.25rem;
    }
    
    .enrollmentTable td:not(:first-child) {
      text-align: center;
    }
    
    .highlighted {
      font-size: 110%;
      font-weight: bold;
    }
    
    .urgent {
      color: red;
    }
    
    .shareDialog .ui-dialog-titlebar {
      display: none;
    }
    
    .shareDialog {
      text-align: center;
    }
    
    .faq {
      font-size: 80%;
    }
  </style>
</head>

<body>

  <h2>Simulation of Impact of Charter Opening on Traditional District Finances</h2>
  <p>This simulation shows the projected impact on district finances of charter school expansions or opening.</p>
  <div class="main faq details">
    <div class="summary">
      <span class="triangleIcon"></span> Simulation details and FAQs</div>
    <div class="detailText">
      <div class="details">
        <div class="summary"><span class="triangleIcon"></span> About the model</div>
        <div class="detailText">This page simulates the effect of charter school opening on the finances of public school districts. The model uses
          2014-2015 State data for each district, including total enrollment, number of schools, teacher salaries, per pupil
          spending, and maximum class size. Data are available here: <a href="http://profiles.doe.mass.edu/state_report/">http://profiles.doe.mass.edu/state_report/</a>.
          It is based on what has happened to districts in the past when charters opens or expands.</div>
      </div>

      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>What happens to funding when a child leaves the district for a charter school?</div>
        <div class="detailText"> When students leave a traditional district for a charter, the district loses the local tax dollars that pay for that
          student's education, not just the state aid. (In comparison, when a student goes to a private school, the state
          aid is lost but the tax dollars &ndash; usually most of the per pupil expenses -- stay with the community.) In
          a community where most of the school spending is local, that's a very big difference.</div>
      </div>

      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>What assumptions does the model make?</div>
        <div class="detailText">
          <p><span style="text-decoration: underline;">How Students Leave</span><strong>:</strong> Based on prior real-life
            cases, we assume that a new charter school will draw a certain number of students from the public school district
            every year. (You can <a href="#charterDrawParameter">change</a> this number in the simulation.) Often new schools
            open with one grade at a time, starting at K or at the start of middle school or high school. For the first year,
            there will be a larger draw from Kindergarten than from the other grades. In the second year, there will be a
            larger draw from 1st grade. This process continues for each year, targeting each successive grade level, until
            the ninth year where there will be a larger draw from 8th grade. Specifically, the simulation tries to draw 60%
            of students from the targeted grade, and then draws the remainder from all grades equally. These students are
            chosen randomly (to try to replicate what actually happens), which means that each run of the simulation may
            result in slightly different outcomes.</p>
          <p><span style="text-decoration: underline;">What the District Does</span><strong>:</strong> We assume that the district
            receives a certain amount of funding for each enrolled student. (You can <a href="#fundingPerStudentParameter">change</a>            this number in the simulation.) We assume that the district will try to close sections to save money, as section
            teachers cost a certain amount per year (you can <a href="#teacherSalaryParameter">change</a> this number in
            the simulation.) The district has a maximum allowable number of students per class section (You can <a href="#maximumClassSizeParameter">change</a>            this number in the simulation.) The district will keep the fewest number of sections without exceeding this maximum
            class size. That is, each school will freely move students between sections in a grade in order to close class
            sections, but students are not moved across grades or across schools, even if this would result in fewer class
            sections. We based the maximum class size on the largest class size we found in the district&rsquo;s data for
            grades K-8 (however you can adjust that number in the model).</p>
          <p><span style="text-decoration: underline;">Other Details</span><strong>:</strong> We assume:</p>
          <ul>
            <li>Each section has one teacher.</li>
            <li>If the district is chosen from <a href="#districtDropdown">the dropdown</a>, the K-8 enrollment for each grade
              in each school in the district is initially chosen to match the 2014-2015 information published by the state.
              (Note that this will differ slightly from actual enrollment, but it will be close). If the district is not
              chosen from the dropdown, you can choose the <a href="#numberOfSchoolsParameter">number of schools</a> and
              the <a href="#numberOfStudentsParameter">initial number of students</a> in the district, and the total district
              K8 enrollment is distributed evenly across grades and schools at the start of the simulation.</li>
            <li>Each district is assumed to have a number of support, intervention, and enrichment teachers at the start of the
              simulation. These teachers are assumed to have the same yearly salary as the class section teachers.</li>
            <li>According to State law, districts receive some funding during a transitional period when a student leaves. This
              program aims to maintain full funding for a student the first year after she leaves the district, and then
              25% funding for each of the next five years, before dropping to zero funding entirely starting in the seventh
              year. However, this program is itself only 59% funded, so in fact, the district only receives 59% of each departed
              student's funding in the first year, and then 59% of 25% = 14.75% funding for the next five years.</li>
          </ul>
        </div>
      </div>
      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>Why is there such a big deficit? </div>
        <div class="detailText">As the simulation progresses, the net loss of funding for departing students quickly becomes greater than the savings
          in teacher salaries by closing sections. This is due to the difficulty in having too few students leave from any
          one grade/school to close sections. Also, the district has fixed costs that don't disappear when a student leaves,
          like the salary of a payroll coordinator, or superintendent. To close the budget gaps, the district will need to
          cut the extras &mdash; like reading teachers, school counselors, specialists (music/art), pre-kindergarten programming,
          and any other student service or support. If the simulation shows that these are completely eliminated, and the
          budget drops below zero, it means that the district will need to cut costs in ways not accounted for by the simulation.</p>
        </div>
      </div>
      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>What else can districts do to cover the deficits?</div>
        <div class="detailText"> Instead of cutting enrichment and support, districts can close schools to cover the annual deficit. However, because
          no one school will lose all of its students, this means moving students who remain in the shuttered school to a
          new school. That&rsquo;s a very disruptive and politically difficult, so sometimes doesn&rsquo;t happen as planned.
          Alternately, a city can cut other city services (e.g. recreation, health and human services, police/fire) to cover
          increased funding for the schools.</p>
        </div>
      </div>
      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>How long will the deficits last?</div>
        <div class="detailText"> With no cap, the deficits may continue until every school has been turned into a privately-run public charter school.</p>
        </div>
      </div>
      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>Where can I learn more?</div>
        <div class="detailText"> Continue the discussion on our Q&amp;A blog at: www.</p>
        </div>
      </div>
      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>How can I see your code and math?</div>
        <div class="detailText">Take a look here: <a href="https://github.com/jcalz/schoolmodel">http://github.com/jcalz/schoolmodel</a>.</p>
        </div>
      </div>
      <div class="details">
        <div class="summary"><span class="triangleIcon"></span>About Us:</div>
        <div class="detailText"> We (Stephanie Hirsch and Joe Calzaretta) are parents of three children in the Somerville Public Schools. Stephanie
          Hirsch has spent almost 20 years working in the analysis of finance and operations data at the State and Local
          level. She studied finance at Harvard Business School and the statistics at the University of Chicago and she believes
          in strong local government and strong community institutions. Joe is an MIT-trained software engineer and mathematician.
          Contact us at <a href="mailto:charter-simulation@googlegroups.com">charter-simulation@googlegroups.com</a></p>
        </div>
      </div>
      <div class="summary">close details </div>

    </div>

  </div>
  <div id="config">
    <label id="districtDropdown">School district:
	  <select id="districtSelect"></select>
	</label>
    <label id="numberOfSchoolsParameter">Number of schools in the district:
      <input data-var="NUMBER_OF_SCHOOLS_IN_DISTRICT" data-io="naturalNumber">
    </label>
    <label id="numberOfStudentsParameter">Initial number of students in the district:
      <input data-var="INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT" data-io="naturalNumber">
    </label>
    <label id="maximumClassSizeParameter">Maximum class size:
      <input data-var="MAXIMUM_CLASS_SIZE" data-io="naturalNumber">
    </label>
    <label id="teacherSalaryParameter">District yearly teacher salary:
      <input data-var="TEACHER_SALARY" data-io="dollarValue">
    </label>
    <label id="fundingPerStudentParameter">District yearly funding per student:
      <input data-var="FUNDING_PER_STUDENT" data-io="dollarValue">
    </label>
    <label id="charterDrawParameter">Number of students leaving for charter per year:
     <input data-var="CHARTER_DRAW_PER_YEAR" data-io="naturalNumber">
    </label>
  </div>
  <br>
  <button id="go">Advance year</button>
  <button id="restart">Restart</button>
  <button class="fb-share-link">Share on Facebook</button>
  <br>
  <div id="charts">
    <div id="fundingChart" class="chart"></div>
    <div id="specialistChart" class="chart"></div>
  </div>
  <div id="output">
    <div>Year: <span id="currentYear"></span></div>
    <div>Students lost: <span id="studentsLost"></span></div>
    <div>Sections closed: <span id="sectionsClosed"></span></div>
    <div class="highlighted" id="totalFunding">Total funding <span id="gainedOrLost">lost</span>: <span id="totalFundingChange"></span></div>
    <div class="highlighted">Savings from section closures: <span id="cutsMadeFromSectionClosures"></span></div>
    <div class="urgent highlighted" id="cutsNeededDiv">Additional cuts needed: <span id="cutsNeededAmount"></span></div>

  </div>
  <div id="enrollmentDetails" class="main details">
    <div class="summary">
      <span class="triangleIcon"></span> Enrollment details </div>
    <div class="detailText">
      <table id="enrollmentTable" class="enrollmentTable"></table>
    </div>
  </div>

  <script>
    var ioProcessors = {
      naturalNumber: {
        display: function(num) {
          return num.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        },
        parse: function(text) {
          return Math.round(parseFloat(text.replace(/[^\d.]/g, '')));
        }
      },
      dollarValue: {
        display: function(num) {
          return num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        },
        parse: function(text) {
          return Math.round(parseFloat(text.replace(/[^\d.]/g, '')));
        }
      },
      none: {
        display: function(n) {
          return n;
        },
        parse: function(n) {
          return n;
        }
      }
    };
    google.charts.load('current', {
      'packages': ['corechart']
    });
    var chartsLoaded = $.Deferred();
    google.charts.setOnLoadCallback(function() {
      chartsLoaded.resolve();
    });
    $(function() {
      $.getJSON('data/districts.json').done(function(districtsObject) {
        // make dropdown for districts
        window.districtsObject = districtsObject;
        var options = Object.keys(districtsObject).map(function(id) {
          return $('<option>', {
            value: id
          }).text(districtsObject[id].districtName);
        });
        options.sort(function(a, b) {
          return compare(a.text(), b.text());
        });
        options.unshift($('<option>', {
          value: ''
        }).text('Choose district or enter custom values'));
        $('#districtSelect').append(options);
        var currentYear = 0;
        var unchangingConfig = {
          // When a student leaves the district for for a charter school, 
          // the district still gets 100% of the student's funding for the first year,
          // and then 25% of the student's funding for the next five years, 
          // before losing funding for thae student altogether after that.
          // 
          // actually that's not true... this program is only 59% funded so only
          // 59% of that funding comes in:
          FUNDING_FRAC_REMOVED_STUDENT: [1, 0.25, 0.25, 0.25, 0.25, 0.25].map(function(x) {
            return (x * 0.59);
          }),
          NUMBER_OF_YEARS: 9
        }
        var config = {
            DISTRICT_CODE: null,
            MAXIMUM_CLASS_SIZE: 25,
            FUNDING_PER_STUDENT: 18165,
            TEACHER_SALARY: 71541,
            INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT: 3384,
            NUMBER_OF_SCHOOLS_IN_DISTRICT: 9,
            CHARTER_DRAW_PER_YEAR: 50
          }
          // replace with values from query param if present
        var queryParams = caseInsensitiveQueryParams();
        Object.keys(config).forEach(function(k) {
          var lck = k.toLowerCase();
          if (lck in queryParams) {
            config[k] = JSON.parse(queryParams[lck][1]);
          }
        });
        var specialistTypes = {};
        var makeSpecialistType = function(typeId, typeName) {
          specialistTypes[typeId] = {
            'typeName': typeName,
            'typeId': typeId,
            'getCost': function() {
              return config.TEACHER_SALARY;
            }
          };
        }
        makeSpecialistType('music', 'Music Teachers');
        makeSpecialistType('art', 'Art Teachers');
        makeSpecialistType('library', 'Librarians');
        makeSpecialistType('languages', 'World Languages Teachers');
        makeSpecialistType('physed', 'Physical Education Teachers');
        makeSpecialistType('counselor', 'Counselor Educators');
        makeSpecialistType('reading', 'Reading Teachers');
        var getSpecialist = function(typeId) {
          return {
            'type': specialistTypes[typeId]
          };
        };
        var getGrade = function(schoolName, initialNumberOfStudents) {
          var name = schoolName ? schoolName : "unnamed grade";
          var getName = function() {
            return name;
          };
          var numberOfStudents = initialNumberOfStudents ? initialNumberOfStudents : 0;
          var getNumberOfStudents = function() {
            return numberOfStudents;
          };
          var removeStudents = function(n) {
            if (n > numberOfStudents) n = numberOfStudents;
            numberOfStudents -= n;
            return n;
          };
          var getNumberOfSections = function() {
            return Math.ceil(getNumberOfStudents() / config.MAXIMUM_CLASS_SIZE);
          };
          return {
            getName: getName,
            getNumberOfStudents: getNumberOfStudents,
            removeStudents: removeStudents,
            getNumberOfSections: getNumberOfSections,
          };
        };
        var getCharter = function() {
          var numberOfStudents = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // array index represents grade, kindergarten - 8th grade
          var getNumberOfStudents = function() {
            return numberOfStudents.reduce(add, 0);
          };
          var yearOpened = null;
          var takeStudentsFromDistrict = function(district) {
            if (yearOpened === null) yearOpened = getCurrentYear();
            var yearsSinceOpened = getCurrentYear() - yearOpened;
            // take 60% of students in grade Y (where Y is years since opened)
            var numFromOneGrade = Math.round(0.6 * config.CHARTER_DRAW_PER_YEAR);
            var g;
            if ((0 <= yearsSinceOpened) && (yearsSinceOpened <= 8)) {
              g = yearsSinceOpened;
              numberOfStudents[g] += district.removeStudentsFromGrade(numFromOneGrade, g);
            }
            // take remainder of  students randomly from any grade in the district
            num = 0;
            while (num < (config.CHARTER_DRAW_PER_YEAR - numFromOneGrade)) {
              if (district.getNumberOfStudents() == 0) break;
              g = Math.floor(Math.random() * 9);
              var n = district.removeStudentsFromGrade(1, g);
              numberOfStudents[g] += n;
              num += n;
            }
          };
          var getNumberOfSections = function() {
            var sec = 0;
            for (var g = 0; g < numberOfStudents.length; g++) {
              sec += Math.ceil(numberOfStudents[g] / config.MAXIMUM_CLASS_SIZE);
            }
            return sec;
          }
          return {
            getName: function() {
              return "Charter School";
            },
            getNumberOfStudents: getNumberOfStudents,
            takeStudentsFromDistrict: takeStudentsFromDistrict,
            getNumberOfSections: getNumberOfSections,
            getNumberOfStudentsInGrade: function(g) {
              return numberOfStudents[g];
            }
          };
        }
        var getSchool = function(name, grades) {
          var sumOver = function(fname) {
            return function() {
              var sum = 0;
              for (var i = 0; i < grades.length; i++) {
                sum += grades[i][fname]();
              }
              return sum;
            };
          };
          var getNumberOfStudents = sumOver('getNumberOfStudents');
          return {
            getName: function() {
              return name;
            },
            getNumberOfStudents: getNumberOfStudents,
            getNumberOfSections: sumOver('getNumberOfSections'),
            getNumberOfStudentsInGrade: function(g) {
              return grades[g].getNumberOfStudents();
            },
            removeStudentsFromGrade: function(num, g) {
              return grades[g].removeStudents(num);
            },
            getNumberOfSectionsInGrade: function(g) {
              return grades[g].getNumberOfSections();
            }
          };
        }
        var gradeNames = ['K', '1', '2', '3', '4', '5', '6', '7', '8'];
        var gradeNamesLong = ['Kindergarten', '1st grade', '2nd grade', '3rd grade', '4th grade', '5th grade',
          '6th grade', '7th grade', '8th grade'
        ];
        var getDistrict = function(numberOfSchools, initialNumberOfStudentsPerSchool, districtCode) {
          var getNumberOfSchools = function() {
            return numberOfSchools;
          }
          var schools = [];
          var d = districtsObject[districtCode];
          var name = undefined;
          if (d) {
            name = d.districtName;
            schools = d.schools.map(function(s) {
              var grades = gradeNames.map(function(g) {
                return getGrade(gradeNames[g], s['enrollment' + g]);
              });
              return getSchool(s.schoolName, grades);
            });
            numberOfSchools = schools.length;
          } else {
            for (var i = 0; i < numberOfSchools; i++) {
              var grades = [];
              var numKids = 0;
              var kidsPerGrade = initialNumberOfStudentsPerSchool / gradeNames.length;
              for (var g = 0; g < gradeNames.length; g++) {
                numKids = Math.floor(kidsPerGrade * (g + 1)) - Math.floor(kidsPerGrade * g);
                grades[g] = getGrade("DS#" + (i + 1) + ", " + gradeNames[g], numKids);
              }
              schools[i] = getSchool("District School #" + (i + 1), grades);
            }
          }
          var getNumberOfStudents = function() {
            return schools.map(function(x) {
              return x.getNumberOfStudents();
            }).reduce(add, 0);
          };
          var initialNumberOfStudents = getNumberOfStudents();
          var getNumberOfStudentsInGrade = function(g) {
            return schools.map(function(x) {
              return x.getNumberOfStudentsInGrade(g);
            }).reduce(add, 0);
          };
          var getNumberOfSections = function() {
            var n = 0;
            for (var i = 0; i < numberOfSchools; i++) {
              n += schools[i].getNumberOfSections();
            }
            return n;
          };
          var specialists = [];
          var addSpecialistType = function(specialistType) {
            var specialist = getSpecialist(specialistType);
            specialists.push(specialist);
          };
          var getSpecialists = function() {
            var netFunds = getNetAvailableFunds();
            for (var i = 0; i < specialists.length; i++) {
              netFunds += specialists[i].type.getCost();
            }
            var specialistCosts = 0;
            for (var i = 0; i < specialists.length; i++) {
              specialistCosts += specialists[i].type.getCost();
              specialists[i].exists = (netFunds >= specialistCosts);
            }
            return specialists;
          }
          var getSpecialistsSummary = function() {
            var res = getSpecialists();
            var obj = {};
            for (var i = 0; i < res.length; i++) {
              var t = res[i].type.typeId;
              if (!(t in obj)) {
                obj[t] = {
                  'type': res[i].type.typeName,
                  'retainedNumber': 0,
                  'initialNumber': 0,
                  'fundingCut': 0
                };
                //keys.push(t);
              }
              obj[t].initialNumber++;
              if (res[i].exists) {
                obj[t].retainedNumber++;
              } else {
                obj[t].fundingCut += res[i].type.getCost();
              }
            }
            return obj;
          }
          var getAvailableFundsForSpecialists = function() {
            var res = getSpecialists();
            return sum(res.map(function(r) {
              return r.type.getCost();
            })) + getNetAvailableFunds();
          }
          var removedStudents = {};
          var removeStudentsFromGrade = function(num, g) {
            if (!(currentYear in removedStudents)) removedStudents[currentYear] = 0;
            var ret = 0;
            while (ret < num) {
              if (getNumberOfStudentsInGrade(g) == 0) break;
              var school = schools[Math.floor(Math.random() * schools.length)];
              ret += school.removeStudentsFromGrade(1, g);
            }
            removedStudents[currentYear] += ret;
            return ret;
          }
          var getStudentFunding = function() {
            var funding = 0;
            funding += config.FUNDING_PER_STUDENT * getNumberOfStudents();
            for (var i = 0; i < unchangingConfig.FUNDING_FRAC_REMOVED_STUDENT.length; i++) {
              var year = currentYear - i;
              status += (i + 'years ago, frac student is ' + unchangingConfig.FUNDING_FRAC_REMOVED_STUDENT[
                i]);
              if (year in removedStudents) {
                status += (removedStudents[year] + ' removed');
                funding += config.FUNDING_PER_STUDENT * unchangingConfig.FUNDING_FRAC_REMOVED_STUDENT[i] *
                  removedStudents[year];
              }
            }
            return funding;
          };
          var getCutsMadeFromSectionClosures = function() {
            return getNumberOfClosedSections() * config.TEACHER_SALARY;
          };
          var getNumberOfClosedSections = function() {
            return (initialNumberOfSections - getNumberOfSections());
          };
          var getAvailableFunds = function() {
            return getStudentFunding() - config.TEACHER_SALARY *
              getNumberOfSections();
          }
          var initialAvailableFunds = getAvailableFunds();
          var initialNumberOfSections = getNumberOfSections();
          var initialStudentFunding = getStudentFunding();
          var getNetAvailableFunds = function() {
            return getAvailableFunds() - initialAvailableFunds;
          };
          var getNetStudentFunding = function() {
            return getStudentFunding() -
              initialStudentFunding;
          };
          var getNumberOfRemovedTeachers = function() {
            var numRemovedSpecialists = getSpecialists().filter(
              function(r) {
                return !r.exists;
              }).length;
            var numRemovedSections = initialNumberOfSections - getNumberOfSections();
            return numRemovedSpecialists + numRemovedSections;
          };
          return {
            schools: schools,
            getNumberOfStudents: getNumberOfStudents,
            getInitialNumberOfStudents: function() {
              return initialNumberOfStudents;
            },
            getNumberOfStudentsInGrade: getNumberOfStudentsInGrade,
            removeStudentsFromGrade: removeStudentsFromGrade,
            getNetAvailableFunds: getNetAvailableFunds,
            getNetStudentFunding: getNetStudentFunding,
            getCutsMadeFromSectionClosures: getCutsMadeFromSectionClosures,
            getAvailableFundsForSpecialists: getAvailableFundsForSpecialists,
            getNumberOfSections: getNumberOfSections,
            getNumberOfClosedSections: getNumberOfClosedSections,
            addSpecialistType: addSpecialistType,
            getSpecialists: getSpecialists,
            getSpecialistsSummary: getSpecialistsSummary,
            getNumberOfRemovedTeachers: getNumberOfRemovedTeachers,
            getName: function() {
              return name;
            }
          };
        };
        var setCurrentYear = function(y) {
          currentYear = y;
        };
        var getCurrentYear = function() {
          return currentYear;
        }
        var specialistChartObj;
        var fundingChartObj;

        function setup() {
          // clear charts
          chartsLoaded.done(function() {
            specialistChartObj = {};
            specialistChartObj.numRows = unchangingConfig.NUMBER_OF_YEARS + 1;
            specialistChartObj.options = {
              title: 'Cut Scenario Example: Change in Number of Support, Intervention, and Enrichment Teachers',
              isStacked: true,
              legend: {
                position: 'none'
              },
              vAxis: {
                viewWindow: {
                  min: 0
                },
                title: 'Teachers'
              },
              hAxis: {
                title: 'Year'
              },
            };
            specialistChartObj.data = new google.visualization.DataTable();
            specialistChartObj.data.addColumn('string', 'Year');
            Object.keys(specialistTypes).sort().forEach(function(t) {
              specialistChartObj.data.addColumn('number', specialistTypes[t].typeName);
              specialistChartObj.data.addColumn({
                type: 'string',
                role: 'tooltip'
              });
            });
            specialistChartObj.data.addRows(specialistChartObj.numRows);
            specialistChartObj.chart = new google.visualization.ColumnChart($('#specialistChart')[0]);
            fundingChartObj = {};
            fundingChartObj.numRows = unchangingConfig.NUMBER_OF_YEARS + 1;
            fundingChartObj.options = {
              title: 'Available Funding for Support, Intervention, Enrichment, and Other Student/District Services',
              legend: {
                position: 'none'
              },
              vAxis: {
                viewWindow: {
                  min: 0,
                  max: 0
                },
                format: 'short',
                title: 'Dollars'
              },
              hAxis: {
                title: 'Year'
              }
            };
            fundingChartObj.data = new google.visualization.DataTable();
            fundingChartObj.data.addColumn('string', 'Year');
            fundingChartObj.data.addColumn('number', 'Funding');
            fundingChartObj.data.addColumn({
              type: 'string',
              role: 'tooltip'
            });
            fundingChartObj.data.addRows(fundingChartObj.numRows);
            fundingChartObj.chart = new google.visualization.ColumnChart($('#fundingChart')[0]);
          });
          // replace query param with values from config
          var queryParams = caseInsensitiveQueryParams();
          Object.keys(config).forEach(function(k) {
            var lck = k.toLowerCase();
            queryParams[lck] = [lck, JSON.stringify(config[k])];
          });
          history.replaceState(null, "", '?' + $.param(objectMap(queryParams, function(kv) {
            return kv[1];
          })));
          district = getDistrict(config.NUMBER_OF_SCHOOLS_IN_DISTRICT, Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT /
            config.NUMBER_OF_SCHOOLS_IN_DISTRICT), config.DISTRICT_CODE);
          window.district = district;
          var m = 'music';
          var a = 'art';
          var r = 'library';
          var repeat = function(array, element, times) {
            for (var i = 0; i < times; i++) array.push(element);
          }
          var arr = [];
          repeat(arr, 'languages', Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT * 4 / 3300));
          repeat(arr, 'art', Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT * 6 / 3300));
          repeat(arr, 'music', Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT * 12 / 3300));
          repeat(arr, 'physed', Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT * 7 / 3300));
          repeat(arr, 'library', Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT * 7 / 3300));
          repeat(arr, 'counselor', Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT * 12 / 3300));
          repeat(arr, 'reading', Math.round(config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT * 8 / 3300));
          arrayShuffle(arr);
          arr.forEach(function(x) {
            district.addSpecialistType(x);
          });
          charter = getCharter('Charter School');
        };

        function getStateObject() {
          var state = {};
          state.year = getCurrentYear();
          state.retainedStudents = district.getNumberOfStudents();
          state.initialStudents = district.getInitialNumberOfStudents();
          state.lostStudents = state.initialStudents - state.retainedStudents;
          state.retainedSections = district.getNumberOfSections();
          state.lostSections = district.getNumberOfClosedSections();
          state.availableFundsForSpecialists = (district.getAvailableFundsForSpecialists());
          state.specialists = district.getSpecialistsSummary();
          state.totalFundingChange = district.getNetStudentFunding();
          state.cutsMadeFromSectionClosures = district.getCutsMadeFromSectionClosures();
          state.cutsNeeded = -district.getNetAvailableFunds();
          return state;
        }

        function output() {
          var stateObj = getStateObject();
          var totalRetainedSpecialists = sum(Object.keys(stateObj.specialists).map(function(t) {
            return stateObj.specialists[t].retainedNumber;
          }));
          chartsLoaded.done(function() {
            if (stateObj.year < specialistChartObj.numRows) {
              specialistChartObj.data.setCell(stateObj.year, 0, stateObj.year + '');
              var i = 1;
              Object.keys(specialistTypes).sort().forEach(function(t) {
                var retained = 0;
                if (t in stateObj.specialists) {
                  retained = stateObj.specialists[t].retainedNumber;
                }
                specialistChartObj.data.setCell(stateObj.year, i, retained);
                i++;
                specialistChartObj.data.setCell(stateObj.year, i, retained + ' ' + specialistTypes[t]
                  .typeName +
                  '\n' + totalRetainedSpecialists + ' Total Specialists');
                i++;
              });
            }
            specialistChartObj.chart.draw(specialistChartObj.data, specialistChartObj.options);
            if (stateObj.year == 0) {
              fundingChartObj.options.vAxis.viewWindow.min =
                stateObj.availableFundsForSpecialists * -1;
              fundingChartObj.options.vAxis.viewWindow.max = stateObj.availableFundsForSpecialists * 1.5;
            }
            if (stateObj.year < fundingChartObj.numRows) {
              fundingChartObj.data.setCell(stateObj.year, 0, stateObj.year + '');
              fundingChartObj.data.setCell(stateObj.year, 1, stateObj.availableFundsForSpecialists);
              fundingChartObj.data.setCell(stateObj.year, 2, money(stateObj.availableFundsForSpecialists,
                false));
            }
            fundingChartObj.chart.draw(fundingChartObj.data, fundingChartObj.options);
          });
          $('#currentYear').text(stateObj.year);
          $('#studentsLost').text(stateObj.lostStudents);
          $('#sectionsClosed').text(stateObj.lostSections);
          var f = stateObj.totalFundingChange;
          $('#gainedOrLost').text(f <= 0 ? 'lost' : 'gained');
          $('#totalFundingChange').text(money(Math.abs(f), false));
          $('#cutsMadeFromSectionClosures').text(money(Math.abs(stateObj.cutsMadeFromSectionClosures), false));
          var cutsNeeded = stateObj.cutsNeeded;
          if (cutsNeeded <= 0) {
            $('#cutsNeededDiv').hide();
          } else {
            $('#cutsNeededAmount').text(money(cutsNeeded, false));
            $('#cutsNeededDiv').show();
          }
          if ($('#enrollmentTable').closest('.details').attr('open'))
            updateEnrollmentTable();
        }

        function updateEnrollmentTable() {
          //console.log('making a table');
          //$('#enrollmentTable');
          var header = [].concat.apply(['School'], gradeNamesLong.map(function(g) {
            return [g + " students\u00a0|\u00a0sections"];
          })).map(function(txt) {
            return $('<th/>').text(txt);
          });
          var rows = district.schools.concat().sort(function(a, b) {
            return compare(a.getName(), b.getName());
          }).map(function(s) {
            return [].concat.apply([s.getName()], gradeNames.map(function(n, g) {
              return [s.getNumberOfStudentsInGrade(g) + " | " + s.getNumberOfSectionsInGrade(g)];
            })).map(function(txt) {
              return $('<td/>').text(txt);
            });
          }).map(function(cells) {
            return $('<tr/>').append(cells);
          });
          $('#enrollmentTable').empty().append(header).append(rows);
          //console.log($('#enrollmentTable').html());
        }
        $('#enrollmentTable').closest('.details')[0].populate = updateEnrollmentTable;
        var charter;
        var district;
        setup();
        output();
        var year = 0;
        $('#go').click(function() {
          year++;
          if (year >= unchangingConfig.NUMBER_OF_YEARS) {
            $('#go').prop('disabled', true);
          }
          setCurrentYear(year);
          charter.takeStudentsFromDistrict(district);
          output();
        });
        var restart = function() {
          year = 0;
          $('#go').prop('disabled', false);
          setCurrentYear(year);
          setup();
          output();
        };
        $('#restart').click(restart);
        var parseConfig = function(elem) {
          var ioProcessor = ioProcessors[$(elem).attr('data-io')];
          if (!ioProcessor) ioProcessor = ioProcessors.none;
          config[$(elem).attr('data-var')] = ioProcessor.parse($(elem).val());
        };
        var displayConfig = function(elem) {
          var ioProcessor = ioProcessors[$(elem).attr('data-io')];
          if (!ioProcessor) ioProcessor = ioProcessors.none;
          $(elem).val(ioProcessor.display(config[$(elem).attr('data-var')]));
        };
        $('input[data-var]').change(function() {
          parseConfig(this);
          displayConfig(this);
          restart();
        }).each(function() {
          displayConfig(this);
        });
        $('#districtSelect').change(function() {
          // set the config values
          districtId = $(this).val();
          config.DISTRICT_CODE = districtId;
          var d = districtsObject[districtId];
          $(
            'input[data-var="NUMBER_OF_SCHOOLS_IN_DISTRICT"], input[data-var="INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT"]'
          ).prop('disabled', !!d);
          if (d) {
            var totalEnrollment = sum(d.schools.map(function(s) {
              return s.totalEnrollment;
            }));
            config.MAXIMUM_CLASS_SIZE = d.maxAllowableClassSize;
            config.FUNDING_PER_STUDENT = Math.round(d.perPupilSpending);
            config.TEACHER_SALARY = Math.round(d.teacherSalary);
            config.INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT = totalEnrollment;
            config.NUMBER_OF_SCHOOLS_IN_DISTRICT = d.schools.length;
            config.CHARTER_DRAW_PER_YEAR = 50 * Math.ceil(totalEnrollment / 3500);
            $('input[data-var]').each(function() {
              displayConfig(this);
            });
          }
          restart();
        }).val(config.DISTRICT_CODE);
        $(
          'input[data-var="NUMBER_OF_SCHOOLS_IN_DISTRICT"], input[data-var="INITIAL_NUMBER_OF_STUDENTS_IN_DISTRICT"]'
        ).prop('disabled', !!(districtsObject[config.DISTRICT_CODE]));
        $('.details .summary').click(function() {
          var el = $(this).closest('.details');
          if (el.attr('open')) {
            el.children(".detailText").slideUp();
            el.removeAttr('open');
          } else {
            if (el[0].populate) el[0].populate();
            el.children(".detailText").slideDown();
            el.attr('open', true);
          }
        });
        $('.fb-share-link').click(function() {
          var button = $(this);
          completeSimulation();
          uploadChartsToImgur().then(function(previewImgUrl) {
            //console.log(linkUrl);
            var title = district.getName() ? district.getName() + ': ' : '';
            var description = $('#totalFunding').text();
            title += 'Simulation of Impact of Charter Opening on Traditional District Finances';
            var href = 'https://www.facebook.com/sharer/sharer.php?u=' +
              encodeURIComponent(window.location.href.replace(/.*?schoolmodel/,
                'https://jcalz.github.io/schoolmodel')) +
              '&picture=' + encodeURIComponent(previewImgUrl) +
              '&title=' + encodeURIComponent(title) +
              '&description=' + encodeURIComponent(description);
            var dialog = $('<div>');
            var closeDialog = function() {
              dialog.dialog("close");
              return true;
            };
            dialog.append($(
              '<a target="fbshare"><button>Share on Facebook<br>(opens new window)</button></a>').attr(
              'href', href).click(closeDialog));
            dialog.append($('<button>Don\'t Share</button>').click(closeDialog));
            dialog.on('dialogclose', function() {
              dialog.remove();
            });
            dialog.dialog({
              modal: true,
              dialogClass: 'shareDialog',
              minHeight: 0
            });
          });
        });
        completeSimulation();

        function completeSimulation() {
          while (getCurrentYear() < unchangingConfig.NUMBER_OF_YEARS) {
            $('#go').click();
          }
        }

        function uploadChartsToImgur() {
          //return $.when('http://i.imgur.com/vykoKV9.jpg'); // static image
          // combine both charts into a single image	  
          var sImg = new Image();
          var fImg = new Image();
          var sImgPromise = $.Deferred();
          var fImgPromise = $.Deferred();
          sImg.onload = function() {
            sImgPromise.resolve();
          };
          fImg.onload = function() {
            fImgPromise.resolve();
          }
          sImg.src = specialistChartObj.chart.getImageURI();
          fImg.src = fundingChartObj.chart.getImageURI();
          return $.when(sImgPromise, fImgPromise).then(function() {
            var canvasHeight = sImg.height + fImg.height;
            var canvasWidth = Math.max(sImg.width, fImg.width);
            if (canvasWidth / canvasHeight < 1.91) {
              canvasWidth = canvasHeight * 1.91;
            } else {
              canvasHeight = canvasWidth / 1.91;
            }
            var canvas = $('<canvas>');
            canvas.prop('width', canvasWidth);
            canvas.prop('height', canvasHeight);
            var ctx = canvas[0].getContext('2d');
            ctx.drawImage(fImg, (canvasWidth - fImg.width) / 2, (canvasHeight - sImg.height - fImg.height) /
              2);
            ctx.drawImage(sImg, (canvasWidth - sImg.width) / 2, (canvasHeight + sImg.height - fImg.height) /
              2);
            var imageData = canvas[0].toDataURL().replace(/.*?base64,/, '');
            return $.ajax({
              url: 'https://api.imgur.com/3/image',
              method: 'POST',
              data: {
                image: imageData
              },
              headers: {
                Authorization: 'Client-ID d55f7459577f2d0'
              }
            });
          }).then(function(data) {
            var previewImageURL;
            if ((data.data) && (data.data.link)) {
              previewImageURL = data.data.link;
            }
            return previewImageURL;
          });
        }
      });
    });
  </script>

</html>
