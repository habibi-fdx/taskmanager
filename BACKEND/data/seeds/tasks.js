exports.seed = function (knex) {
    return knex("tasks")
        .del()
        .then(function () {
            return knex("tasks").insert([
                {
                    description: "Complete project report",
                    status: "In Progress",
                    creation_date: new Date("2024-02-01"),
                    category: "Work",
                    assigned_user: "John Doe",
                },
                {
                    description: "Buy groceries",
                    status: "Pending",
                    creation_date: new Date("2024-02-02"),
                    category: "Personal",
                    assigned_user: "Jane Doe",
                },
                {
                    description: "Schedule team meeting",
                    status: "Completed",
                    creation_date: new Date("2024-02-03"),
                    category: "Work",
                    assigned_user: "Alice Smith",
                },
            ]);
        });
};
