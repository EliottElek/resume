const experiences = [
  {
    title: "JEECE (Junior entreprise de l'ECE)",
    period: "November 2021 - April 2022",
    logoUrl:
      "data:image/png;base64,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",
    body: [
      {
        point: "Full stack (MERN) developer for ECE's junior entreprise. ",
      },
      {
        point:
          "Developement of full stack e-commerce, using technologies such as ReactJS and NodeJS.",
      },
    ],
  },
  {
    title: "HOFFMANN.AI",
    // logoUrl:
    //   "https://media-exp1.licdn.com/dms/image/C4E1BAQESpuZj7ZkKdw/company-background_10000/0/1627115707909?e=2159024400&v=beta&t=PNQFgXyaK-MQ3SXhtjyuF4xGBS9KF5nNd7OQ2velD9o",
    period: "April 2021– September 2021",
    body: [
      {
        point: "Web application development using ReactJS",
      },
      {
        point: "Static website conception using ReactJS and Gatsby",
      },
      {
        point: "Creation of showcase sites using Wordpress",
      },
      {
        point:
          "Prototyping, conception et building of e-commerce websites using Woocommerce",
      },
      {
        point: "Regalar contact with clients",
      },
    ],
  },
  {
    title: "PSA GROUP (PEUGEOT)",
    logoUrl:
      "https://images.caradisiac.com/logos/4/7/3/3/194733/S0-ventes-peugeot-perce-grace-a-l-iran-112018.jpg",
    period: "January 2020– February 2020",
    body: [
      {
        point:
          "Internship in the Research and Development sector at PSA Poissy",
      },
      {
        point:
          "Creation of a VBA application facilitating  recovery and interpretation of data related to users feedback",
      },
    ],
  },
  {
    title: "THE CHARGING PLACE",
    period: "May 2019– July 2019",
    logoUrl:
      "https://pbs.twimg.com/profile_images/1348978435302043649/_fThc9l3_400x400.jpg",
    body: [
      {
        point:
          "Warehouseman : installation, repairing et recovery of phone charging terminals in multiple places and countries : Roland Garros, Parc des Princes, Belgium, Netherlands, Normandy...",
      },
      {
        point:
          "Host : assistance to people who want to recharge their laptops, machine maintenance throughout the tournament",
      },
    ],
  },
];
export default experiences;
