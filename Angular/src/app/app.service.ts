import { Injectable } from '@angular/core';

export interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  BirthDate: string;
  Address: string;
}

const employees: Employee[] = [
  {
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Prefix: 'Mr.',
    Position: 'CEO',
    BirthDate: '1964/03/16',
    Address: '351 S Hill St.',
  },
  {
    ID: 2,
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Prefix: 'Ms.',
    Position: 'Sales Assistant',
    BirthDate: '1981/06/03',
    Address: '807 W Paseo Del Mar',
  },
  {
    ID: 3,
    FirstName: 'Robert',
    LastName: 'Reagan',
    Prefix: 'Mr.',
    Position: 'Developer',
    BirthDate: '1974/09/07',
    Address: '4 Westmoreland Pl.',
  },
  {
    ID: 4,
    FirstName: 'Greta',
    LastName: 'Sims',
    Prefix: 'Ms.',
    Position: 'HR Manager',
    BirthDate: '1977/11/22',
    Address: '1700 S Grandview Dr.',
  },
  {
    ID: 5,
    FirstName: 'Brett',
    LastName: 'Wade',
    Prefix: 'Mr.',
    Position: 'IT Manager',
    BirthDate: '1968/12/01',
    Address: '1120 Old Mill Rd.',
  },
];

@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;
  }
}
