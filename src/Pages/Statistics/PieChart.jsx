import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";



const PieCharts = () => {

    const [yourDonation, setYourDonation] = useState(0);
    const [totalDonation,serTotalDonation] = useState(12);


    useEffect(() => {

        const getData = JSON.parse(localStorage.getItem('Cards'));
        if (getData) {
            const getDataLength = getData.length;
            setYourDonation(getDataLength);
            const Total = totalDonation - getDataLength;
            serTotalDonation(Total);

        }
    }, []);

    console.log(totalDonation, yourDonation);
    const data = [
        { name: 'Total Donation', value: totalDonation },
        { name: 'Your Donation', value: yourDonation }

    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        console.log(radius, x, y, RADIAN, midAngle);
        return (
            <text className=" text-xl font-bold"
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // const totalDonation = pieData.reduce((a,b)=>a+b.value,0)
    return (
        <div className=" flex justify-center items-center mb-5">
            {/* <PieChart className=" flex justify-center items-center" width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    // outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend ></Legend>
            </PieChart> */}

            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    startAngle={360}
                    endAngle={0}
                    data={data}
                    cx={200}
                    cy={200}
                    // outerRadius={80}
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}>
                      
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                    </Pie>
                    <Legend ></Legend>
            </PieChart>

        </div>
    );
};

export default PieCharts;

