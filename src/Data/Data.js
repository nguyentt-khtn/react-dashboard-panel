export const Data = [
    {
        icon: <i className="fas fa-home"></i>,
        title: 'Dashboard'
    },
    {
        icon: <i className="fas fa-clipboard-list"></i>,
        title: 'Orders'
    },
    {
        icon: <i className="fas fa-users"></i>,
        title: 'Customers'
    },
    {
        icon: <i className="far fa-bookmark"></i>,
        title: 'Products'
    },
    {
        icon: <i className="far fa-chart-bar"></i>,
        title: 'Analytics'
    },
]

export const CardData = [
    {
        title: 'Sales',
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        icon: <i className="fas fa-dollar-sign"></i>,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ],
        
    },
    {
        title: 'Revenue',
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        icon: <i className="fas fa-file-invoice-dollar"></i>,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ],

    },
    {
        title: 'Expenses',
        color: {
            backGround: "linear-gradient(180deg, #FF6600 0%, #FF66 100%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        icon: <i className="far fa-calendar-alt"></i>,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20]
            }
        ],

    },
]