using System;
using System.Collections.Generic;

namespace ASP_NET_Core.Models {
    public class Employee {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Prefix { get; set; }
        public string Position { get; set; }
        public DateTime BirthDate { get; set; }
        public string Address { get; set; }
    }

    static class EmployeeData {
        public static List<Employee> Employees = new List<Employee>() {
            new Employee {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Prefix = "Mr.",
                Position = "CEO",
                BirthDate = new DateTime(1964, 3, 16),
                Address = "351 S Hill St."
            },
            new Employee {
                ID = 2,
                FirstName = "Olivia",
                LastName = "Peyton",
                Prefix = "Ms.",
                Position = "Sales Assistant",
                BirthDate = new DateTime(1981, 6, 3),
                Address = "807 W Paseo Del Mar"
            },
            new Employee {
                ID = 3,
                FirstName = "Robert",
                LastName = "Reagan",
                Prefix = "Mr.",
                Position = "Developer",
                BirthDate = new DateTime(1974, 9, 7),
                Address = "4 Westmoreland Pl."
            },
            new Employee {
                ID = 4,
                FirstName = "Greta",
                LastName = "Sims",
                Prefix = "Ms.",
                Position = "HR Manager",
                BirthDate = new DateTime(1977, 11, 22),
                Address = "1700 S Grandview Dr."
            },
            new Employee {
                ID = 5,
                FirstName = "Brett",
                LastName = "Wade",
                Prefix = "Mr.",
                Position = "IT Manager",
                BirthDate = new DateTime(1968, 12, 1),
                Address = "1120 Old Mill Rd."
            }
        };
    }
}
