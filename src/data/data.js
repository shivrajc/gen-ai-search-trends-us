import { writable } from "svelte/store";

const data = writable(
  [
    {
      "state": "California",
      "state_code": "CA",
      "category": "Midjourney",
      "value": 0.49,
      "row": 5,
      "col": 1
    },
    {
      "state": "Washington",
      "state_code": "WA",
      "category": "Midjourney",
      "value": 0.43,
      "row": 3,
      "col": 1
    },
    {
      "state": "Oregon",
      "state_code": "OR",
      "category": "Midjourney",
      "value": 0.45,
      "row": 4,
      "col": 1
    },
    {
      "state": "District of Columbia",
      "state_code": "DC",
      "category": "Midjourney",
      "value": 0.47,
      "row": 6,
      "col": 9
    },
    {
      "state": "Utah",
      "state_code": "UT",
      "category": "Midjourney",
      "value": 0.44,
      "row": 5,
      "col": 2
    },
    {
      "state": "Colorado",
      "state_code": "CO",
      "category": "Midjourney",
      "value": 0.49,
      "row": 5,
      "col": 3
    },
    {
      "state": "Virginia",
      "state_code": "VA",
      "category": "Midjourney",
      "value": 0.46,
      "row": 5,
      "col": 8
    },
    {
      "state": "Hawaii",
      "state_code": "HI",
      "category": "Midjourney",
      "value": 0.51,
      "row": 8,
      "col": 1
    },
    {
      "state": "Vermont",
      "state_code": "VT",
      "category": "Midjourney",
      "value": 0.4,
      "row": 2,
      "col": 10
    },
    {
      "state": "Nevada",
      "state_code": "NV",
      "category": "Midjourney",
      "value": 0.47,
      "row": 4,
      "col": 2
    },
    {
      "state": "New York",
      "state_code": "NY",
      "category": "Midjourney",
      "value": 0.47,
      "row": 3,
      "col": 9
    },
    {
      "state": "Massachusetts",
      "state_code": "MA",
      "category": "Midjourney",
      "value": 0.42,
      "row": 3,
      "col": 10
    },
    {
      "state": "Rhode Island",
      "state_code": "RI",
      "category": "Midjourney",
      "value": 0.41,
      "row": 4,
      "col": 11
    },
    {
      "state": "Arizona",
      "state_code": "AZ",
      "category": "Midjourney",
      "value": 0.48,
      "row": 6,
      "col": 2
    },
    {
      "state": "New Jersey",
      "state_code": "NJ",
      "category": "Midjourney",
      "value": 0.49,
      "row": 4,
      "col": 9
    },
    {
      "state": "Idaho",
      "state_code": "ID",
      "category": "Midjourney",
      "value": 0.4,
      "row": 3,
      "col": 2
    },
    {
      "state": "Florida",
      "state_code": "FL",
      "category": "Midjourney",
      "value": 0.47,
      "row": 8,
      "col": 9
    },
    {
      "state": "Texas",
      "state_code": "TX",
      "category": "Midjourney",
      "value": 0.46,
      "row": 8,
      "col": 4
    },
    {
      "state": "Georgia",
      "state_code": "GA",
      "category": "Midjourney",
      "value": 0.49,
      "row": 7,
      "col": 8
    },
    {
      "state": "Maine",
      "state_code": "ME",
      "category": "Midjourney",
      "value": 0.39,
      "row": 1,
      "col": 11
    },
    {
      "state": "Alaska",
      "state_code": "AK",
      "category": "Midjourney",
      "value": 0.38,
      "row": 1,
      "col": 1
    },
    {
      "state": "Michigan",
      "state_code": "MI",
      "category": "Midjourney",
      "value": 0.42,
      "row": 3,
      "col": 7
    },
    {
      "state": "Wyoming",
      "state_code": "WY",
      "category": "Midjourney",
      "value": 0.46,
      "row": 4,
      "col": 3
    },
    {
      "state": "Illinois",
      "state_code": "IL",
      "category": "Midjourney",
      "value": 0.42,
      "row": 3,
      "col": 6
    },
    {
      "state": "New Hampshire",
      "state_code": "NH",
      "category": "Midjourney",
      "value": 0.36,
      "row": 2,
      "col": 11
    },
    {
      "state": "North Carolina",
      "state_code": "NC",
      "category": "Midjourney",
      "value": 0.46,
      "row": 6,
      "col": 7
    },
    {
      "state": "Kansas",
      "state_code": "KS",
      "category": "Midjourney",
      "value": 0.42,
      "row": 6,
      "col": 4
    },
    {
      "state": "Montana",
      "state_code": "MT",
      "category": "Midjourney",
      "value": 0.42,
      "row": 3,
      "col": 3
    },
    {
      "state": "Maryland",
      "state_code": "MD",
      "category": "Midjourney",
      "value": 0.43,
      "row": 5,
      "col": 9
    },
    {
      "state": "Pennsylvania",
      "state_code": "PA",
      "category": "Midjourney",
      "value": 0.4,
      "row": 4,
      "col": 8
    },
    {
      "state": "Minnesota",
      "state_code": "MN",
      "category": "Midjourney",
      "value": 0.41,
      "row": 3,
      "col": 5
    },
    {
      "state": "Oklahoma",
      "state_code": "OK",
      "category": "Midjourney",
      "value": 0.42,
      "row": 7,
      "col": 4
    },
    {
      "state": "Connecticut",
      "state_code": "CT",
      "category": "Midjourney",
      "value": 0.42,
      "row": 4,
      "col": 10
    },
    {
      "state": "Ohio",
      "state_code": "OH",
      "category": "Midjourney",
      "value": 0.42,
      "row": 4,
      "col": 7
    },
    {
      "state": "Missouri",
      "state_code": "MO",
      "category": "Midjourney",
      "value": 0.4,
      "row": 5,
      "col": 5
    },
    {
      "state": "New Mexico",
      "state_code": "NM",
      "category": "Midjourney",
      "value": 0.39,
      "row": 6,
      "col": 3
    },
    {
      "state": "Arkansas",
      "state_code": "AR",
      "category": "Midjourney",
      "value": 0.42,
      "row": 6,
      "col": 5
    },
    {
      "state": "Tennessee",
      "state_code": "TN",
      "category": "Midjourney",
      "value": 0.44,
      "row": 6,
      "col": 6
    },
    {
      "state": "Nebraska",
      "state_code": "NE",
      "category": "Midjourney",
      "value": 0.39,
      "row": 5,
      "col": 4
    },
    {
      "state": "Delaware",
      "state_code": "DE",
      "category": "Midjourney",
      "value": 0.43,
      "row": 5,
      "col": 10
    },
    {
      "state": "Iowa",
      "state_code": "IA",
      "category": "Midjourney",
      "value": 0.4,
      "row": 4,
      "col": 5
    },
    {
      "state": "Indiana",
      "state_code": "IN",
      "category": "Midjourney",
      "value": 0.38,
      "row": 4,
      "col": 6
    },
    {
      "state": "Kentucky",
      "state_code": "KY",
      "category": "Midjourney",
      "value": 0.38,
      "row": 5,
      "col": 6
    },
    {
      "state": "Wisconsin",
      "state_code": "WI",
      "category": "Midjourney",
      "value": 0.37,
      "row": 2,
      "col": 6
    },
    {
      "state": "South Carolina",
      "state_code": "SC",
      "category": "Midjourney",
      "value": 0.43,
      "row": 6,
      "col": 8
    },
    {
      "state": "Louisiana",
      "state_code": "LA",
      "category": "Midjourney",
      "value": 0.43,
      "row": 7,
      "col": 5
    },
    {
      "state": "South Dakota",
      "state_code": "SD",
      "category": "Midjourney",
      "value": 0.36,
      "row": 4,
      "col": 4
    },
    {
      "state": "Alabama",
      "state_code": "AL",
      "category": "Midjourney",
      "value": 0.41,
      "row": 7,
      "col": 7
    },
    {
      "state": "North Dakota",
      "state_code": "ND",
      "category": "Midjourney",
      "value": 0.36,
      "row": 3,
      "col": 4
    },
    {
      "state": "West Virginia",
      "state_code": "WV",
      "category": "Midjourney",
      "value": 0.34,
      "row": 5,
      "col": 7
    },
    {
      "state": "Mississippi",
      "state_code": "MS",
      "category": "Midjourney",
      "value": 0.44,
      "row": 7,
      "col": 6
    },
    {
      "state": "California",
      "state_code": "CA",
      "category": "Stable Diffusion",
      "value": 0.29,
      "row": 5,
      "col": 1
    },
    {
      "state": "Washington",
      "state_code": "WA",
      "category": "Stable Diffusion",
      "value": 0.32,
      "row": 3,
      "col": 1
    },
    {
      "state": "Oregon",
      "state_code": "OR",
      "category": "Stable Diffusion",
      "value": 0.28,
      "row": 4,
      "col": 1
    },
    {
      "state": "District of Columbia",
      "state_code": "DC",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 6,
      "col": 9
    },
    {
      "state": "Utah",
      "state_code": "UT",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 5,
      "col": 2
    },
    {
      "state": "Colorado",
      "state_code": "CO",
      "category": "Stable Diffusion",
      "value": 0.24,
      "row": 5,
      "col": 3
    },
    {
      "state": "Virginia",
      "state_code": "VA",
      "category": "Stable Diffusion",
      "value": 0.28,
      "row": 5,
      "col": 8
    },
    {
      "state": "Hawaii",
      "state_code": "HI",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 8,
      "col": 1
    },
    {
      "state": "Vermont",
      "state_code": "VT",
      "category": "Stable Diffusion",
      "value": 0.29,
      "row": 2,
      "col": 10
    },
    {
      "state": "Nevada",
      "state_code": "NV",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 4,
      "col": 2
    },
    {
      "state": "New York",
      "state_code": "NY",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 3,
      "col": 9
    },
    {
      "state": "Massachusetts",
      "state_code": "MA",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 3,
      "col": 10
    },
    {
      "state": "Rhode Island",
      "state_code": "RI",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 4,
      "col": 11
    },
    {
      "state": "Arizona",
      "state_code": "AZ",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 6,
      "col": 2
    },
    {
      "state": "New Jersey",
      "state_code": "NJ",
      "category": "Stable Diffusion",
      "value": 0.24,
      "row": 4,
      "col": 9
    },
    {
      "state": "Idaho",
      "state_code": "ID",
      "category": "Stable Diffusion",
      "value": 0.29,
      "row": 3,
      "col": 2
    },
    {
      "state": "Florida",
      "state_code": "FL",
      "category": "Stable Diffusion",
      "value": 0.23,
      "row": 8,
      "col": 9
    },
    {
      "state": "Texas",
      "state_code": "TX",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 8,
      "col": 4
    },
    {
      "state": "Georgia",
      "state_code": "GA",
      "category": "Stable Diffusion",
      "value": 0.23,
      "row": 7,
      "col": 8
    },
    {
      "state": "Maine",
      "state_code": "ME",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 1,
      "col": 11
    },
    {
      "state": "Alaska",
      "state_code": "AK",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 1,
      "col": 1
    },
    {
      "state": "Michigan",
      "state_code": "MI",
      "category": "Stable Diffusion",
      "value": 0.24,
      "row": 3,
      "col": 7
    },
    {
      "state": "Wyoming",
      "state_code": "WY",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 4,
      "col": 3
    },
    {
      "state": "Illinois",
      "state_code": "IL",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 3,
      "col": 6
    },
    {
      "state": "New Hampshire",
      "state_code": "NH",
      "category": "Stable Diffusion",
      "value": 0.31,
      "row": 2,
      "col": 11
    },
    {
      "state": "North Carolina",
      "state_code": "NC",
      "category": "Stable Diffusion",
      "value": 0.23,
      "row": 6,
      "col": 7
    },
    {
      "state": "Kansas",
      "state_code": "KS",
      "category": "Stable Diffusion",
      "value": 0.28,
      "row": 6,
      "col": 4
    },
    {
      "state": "Montana",
      "state_code": "MT",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 3,
      "col": 3
    },
    {
      "state": "Maryland",
      "state_code": "MD",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 5,
      "col": 9
    },
    {
      "state": "Pennsylvania",
      "state_code": "PA",
      "category": "Stable Diffusion",
      "value": 0.24,
      "row": 4,
      "col": 8
    },
    {
      "state": "Minnesota",
      "state_code": "MN",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 3,
      "col": 5
    },
    {
      "state": "Oklahoma",
      "state_code": "OK",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 7,
      "col": 4
    },
    {
      "state": "Connecticut",
      "state_code": "CT",
      "category": "Stable Diffusion",
      "value": 0.24,
      "row": 4,
      "col": 10
    },
    {
      "state": "Ohio",
      "state_code": "OH",
      "category": "Stable Diffusion",
      "value": 0.23,
      "row": 4,
      "col": 7
    },
    {
      "state": "Missouri",
      "state_code": "MO",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 5,
      "col": 5
    },
    {
      "state": "New Mexico",
      "state_code": "NM",
      "category": "Stable Diffusion",
      "value": 0.28,
      "row": 6,
      "col": 3
    },
    {
      "state": "Arkansas",
      "state_code": "AR",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 6,
      "col": 5
    },
    {
      "state": "Tennessee",
      "state_code": "TN",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 6,
      "col": 6
    },
    {
      "state": "Nebraska",
      "state_code": "NE",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 5,
      "col": 4
    },
    {
      "state": "Delaware",
      "state_code": "DE",
      "category": "Stable Diffusion",
      "value": 0.23,
      "row": 5,
      "col": 10
    },
    {
      "state": "Iowa",
      "state_code": "IA",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 4,
      "col": 5
    },
    {
      "state": "Indiana",
      "state_code": "IN",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 4,
      "col": 6
    },
    {
      "state": "Kentucky",
      "state_code": "KY",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 5,
      "col": 6
    },
    {
      "state": "Wisconsin",
      "state_code": "WI",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 2,
      "col": 6
    },
    {
      "state": "South Carolina",
      "state_code": "SC",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 6,
      "col": 8
    },
    {
      "state": "Louisiana",
      "state_code": "LA",
      "category": "Stable Diffusion",
      "value": 0.25,
      "row": 7,
      "col": 5
    },
    {
      "state": "South Dakota",
      "state_code": "SD",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 4,
      "col": 4
    },
    {
      "state": "Alabama",
      "state_code": "AL",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 7,
      "col": 7
    },
    {
      "state": "North Dakota",
      "state_code": "ND",
      "category": "Stable Diffusion",
      "value": 0.26,
      "row": 3,
      "col": 4
    },
    {
      "state": "West Virginia",
      "state_code": "WV",
      "category": "Stable Diffusion",
      "value": 0.28,
      "row": 5,
      "col": 7
    },
    {
      "state": "Mississippi",
      "state_code": "MS",
      "category": "Stable Diffusion",
      "value": 0.27,
      "row": 7,
      "col": 6
    },
    {
      "state": "California",
      "state_code": "CA",
      "category": "DALL-E",
      "value": 0.22,
      "row": 5,
      "col": 1
    },
    {
      "state": "Washington",
      "state_code": "WA",
      "category": "DALL-E",
      "value": 0.25,
      "row": 3,
      "col": 1
    },
    {
      "state": "Oregon",
      "state_code": "OR",
      "category": "DALL-E",
      "value": 0.27,
      "row": 4,
      "col": 1
    },
    {
      "state": "District of Columbia",
      "state_code": "DC",
      "category": "DALL-E",
      "value": 0.28,
      "row": 6,
      "col": 9
    },
    {
      "state": "Utah",
      "state_code": "UT",
      "category": "DALL-E",
      "value": 0.3,
      "row": 5,
      "col": 2
    },
    {
      "state": "Colorado",
      "state_code": "CO",
      "category": "DALL-E",
      "value": 0.27,
      "row": 5,
      "col": 3
    },
    {
      "state": "Virginia",
      "state_code": "VA",
      "category": "DALL-E",
      "value": 0.26,
      "row": 5,
      "col": 8
    },
    {
      "state": "Hawaii",
      "state_code": "HI",
      "category": "DALL-E",
      "value": 0.24,
      "row": 8,
      "col": 1
    },
    {
      "state": "Vermont",
      "state_code": "VT",
      "category": "DALL-E",
      "value": 0.31,
      "row": 2,
      "col": 10
    },
    {
      "state": "Nevada",
      "state_code": "NV",
      "category": "DALL-E",
      "value": 0.26,
      "row": 4,
      "col": 2
    },
    {
      "state": "New York",
      "state_code": "NY",
      "category": "DALL-E",
      "value": 0.27,
      "row": 3,
      "col": 9
    },
    {
      "state": "Massachusetts",
      "state_code": "MA",
      "category": "DALL-E",
      "value": 0.32,
      "row": 3,
      "col": 10
    },
    {
      "state": "Rhode Island",
      "state_code": "RI",
      "category": "DALL-E",
      "value": 0.32,
      "row": 4,
      "col": 11
    },
    {
      "state": "Arizona",
      "state_code": "AZ",
      "category": "DALL-E",
      "value": 0.26,
      "row": 6,
      "col": 2
    },
    {
      "state": "New Jersey",
      "state_code": "NJ",
      "category": "DALL-E",
      "value": 0.27,
      "row": 4,
      "col": 9
    },
    {
      "state": "Idaho",
      "state_code": "ID",
      "category": "DALL-E",
      "value": 0.31,
      "row": 3,
      "col": 2
    },
    {
      "state": "Florida",
      "state_code": "FL",
      "category": "DALL-E",
      "value": 0.3,
      "row": 8,
      "col": 9
    },
    {
      "state": "Texas",
      "state_code": "TX",
      "category": "DALL-E",
      "value": 0.28,
      "row": 8,
      "col": 4
    },
    {
      "state": "Georgia",
      "state_code": "GA",
      "category": "DALL-E",
      "value": 0.28,
      "row": 7,
      "col": 8
    },
    {
      "state": "Maine",
      "state_code": "ME",
      "category": "DALL-E",
      "value": 0.36,
      "row": 1,
      "col": 11
    },
    {
      "state": "Alaska",
      "state_code": "AK",
      "category": "DALL-E",
      "value": 0.37,
      "row": 1,
      "col": 1
    },
    {
      "state": "Michigan",
      "state_code": "MI",
      "category": "DALL-E",
      "value": 0.34,
      "row": 3,
      "col": 7
    },
    {
      "state": "Wyoming",
      "state_code": "WY",
      "category": "DALL-E",
      "value": 0.29,
      "row": 4,
      "col": 3
    },
    {
      "state": "Illinois",
      "state_code": "IL",
      "category": "DALL-E",
      "value": 0.32,
      "row": 3,
      "col": 6
    },
    {
      "state": "New Hampshire",
      "state_code": "NH",
      "category": "DALL-E",
      "value": 0.33,
      "row": 2,
      "col": 11
    },
    {
      "state": "North Carolina",
      "state_code": "NC",
      "category": "DALL-E",
      "value": 0.31,
      "row": 6,
      "col": 7
    },
    {
      "state": "Kansas",
      "state_code": "KS",
      "category": "DALL-E",
      "value": 0.3,
      "row": 6,
      "col": 4
    },
    {
      "state": "Montana",
      "state_code": "MT",
      "category": "DALL-E",
      "value": 0.32,
      "row": 3,
      "col": 3
    },
    {
      "state": "Maryland",
      "state_code": "MD",
      "category": "DALL-E",
      "value": 0.3,
      "row": 5,
      "col": 9
    },
    {
      "state": "Pennsylvania",
      "state_code": "PA",
      "category": "DALL-E",
      "value": 0.36,
      "row": 4,
      "col": 8
    },
    {
      "state": "Minnesota",
      "state_code": "MN",
      "category": "DALL-E",
      "value": 0.32,
      "row": 3,
      "col": 5
    },
    {
      "state": "Oklahoma",
      "state_code": "OK",
      "category": "DALL-E",
      "value": 0.32,
      "row": 7,
      "col": 4
    },
    {
      "state": "Connecticut",
      "state_code": "CT",
      "category": "DALL-E",
      "value": 0.34,
      "row": 4,
      "col": 10
    },
    {
      "state": "Ohio",
      "state_code": "OH",
      "category": "DALL-E",
      "value": 0.35,
      "row": 4,
      "col": 7
    },
    {
      "state": "Missouri",
      "state_code": "MO",
      "category": "DALL-E",
      "value": 0.33,
      "row": 5,
      "col": 5
    },
    {
      "state": "New Mexico",
      "state_code": "NM",
      "category": "DALL-E",
      "value": 0.33,
      "row": 6,
      "col": 3
    },
    {
      "state": "Arkansas",
      "state_code": "AR",
      "category": "DALL-E",
      "value": 0.32,
      "row": 6,
      "col": 5
    },
    {
      "state": "Tennessee",
      "state_code": "TN",
      "category": "DALL-E",
      "value": 0.31,
      "row": 6,
      "col": 6
    },
    {
      "state": "Nebraska",
      "state_code": "NE",
      "category": "DALL-E",
      "value": 0.35,
      "row": 5,
      "col": 4
    },
    {
      "state": "Delaware",
      "state_code": "DE",
      "category": "DALL-E",
      "value": 0.34,
      "row": 5,
      "col": 10
    },
    {
      "state": "Iowa",
      "state_code": "IA",
      "category": "DALL-E",
      "value": 0.34,
      "row": 4,
      "col": 5
    },
    {
      "state": "Indiana",
      "state_code": "IN",
      "category": "DALL-E",
      "value": 0.35,
      "row": 4,
      "col": 6
    },
    {
      "state": "Kentucky",
      "state_code": "KY",
      "category": "DALL-E",
      "value": 0.36,
      "row": 5,
      "col": 6
    },
    {
      "state": "Wisconsin",
      "state_code": "WI",
      "category": "DALL-E",
      "value": 0.36,
      "row": 2,
      "col": 6
    },
    {
      "state": "South Carolina",
      "state_code": "SC",
      "category": "DALL-E",
      "value": 0.32,
      "row": 6,
      "col": 8
    },
    {
      "state": "Louisiana",
      "state_code": "LA",
      "category": "DALL-E",
      "value": 0.32,
      "row": 7,
      "col": 5
    },
    {
      "state": "South Dakota",
      "state_code": "SD",
      "category": "DALL-E",
      "value": 0.38,
      "row": 4,
      "col": 4
    },
    {
      "state": "Alabama",
      "state_code": "AL",
      "category": "DALL-E",
      "value": 0.33,
      "row": 7,
      "col": 7
    },
    {
      "state": "North Dakota",
      "state_code": "ND",
      "category": "DALL-E",
      "value": 0.38,
      "row": 3,
      "col": 4
    },
    {
      "state": "West Virginia",
      "state_code": "WV",
      "category": "DALL-E",
      "value": 0.38,
      "row": 5,
      "col": 7
    },
    {
      "state": "Mississippi",
      "state_code": "MS",
      "category": "DALL-E",
      "value": 0.29,
      "row": 7,
      "col": 6
    }
  ]
);

export { data };