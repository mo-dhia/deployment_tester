import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  registerables,
} from "chart.js";
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';
// import { Cloudinary } from "@cloudinary/url-gen";
import axios from 'axios';
import styles from "./dashboard.module.css"
import { useRouter } from 'next/router';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ...registerables
);
const Dashboard = () => {
  const [monthlyUsers, setMonthlyUsers] = useState(null);
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [timestamp, setTimestamp] = useState(new Date());
  const router = useRouter();
  const { uid } = router.query;

  useEffect(() => {
    const url = "http://localhost:3000/api/clients";

    fetchData(url);
    fetchBlogs("http://localhost:3000/api/blogs");
  }, []);
  async function fetchData(url) {
    try {
      // console.log('uid',uid)
      const response = await axios.get(url);
      setMonthlyUsers(response.data);
      setUsers(response.data)
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const monthlyData = { labels: [], data: [] };
  if (monthlyUsers) {
    monthlyUsers.forEach((user) => {
      const month = new Date(
        user.data.created_at.seconds * 1000
      ).toLocaleString("default", { month: "long" });
      const index = monthlyData.labels.findIndex((label) => label === month);
      if (index === -1) {
        monthlyData.labels.push(month);
        monthlyData.data.push(1);
      } else {
        monthlyData.data[index]++;
      }
    });
  }
  async function fetchBlogs(url) {
    try {
      const response = await axios.get(url)
      // console.log(response.data)
      setBlogs(response.data)
    }
    catch (error) {
      alert('Error deleting blog:', error.message)
    }
  }

  const addNewBlog = async () => {
    const blog = {
      title: blogTitle,
      description: description,
      image_url: url,
      created_at: timestamp,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/blogs/add",
        blog
      );

      console.log("Blog posted successfully:", response.data, "blog", blog);
      let refresh = await axios.get("http://localhost:3000/api/blogs");
      setBlogs(refresh.data);
    } catch (error) {
      alert('Error posting blog:', error.message);
    }
  };
  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/blogs/delete/${id}`
      );
      console.log(response);
      let refresh = await axios.get("http://localhost:3000/api/blogs");
      setBlogs(refresh.data);
    } catch (error) {
      console.error("Error deleting blog:", error.message);
    }
  
  }
  const updateBlog = async (id) => {
    let updatedData = {
      title: blogTitle,
      description: description,
      image_url: url,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/api/blogs/update/blog/${id}`,
        updatedData
      );
      console.log(response);
    } catch (error) {
      console.error("Error updating data", error.message);
    }
  };
  const handleInputChange = (event) => {
    setTimestamp(event.target.value);
  };

  return (
    <div className={styles.elpapa}>
      {" "}
      <div className={styles.dashboard}>
        <div className={styles.tablecontainer}>
          <div>
            <h2>All Users</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Nr</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Created At</th>
                  {/* <th>Manage users</th> */}
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{user.data.first_name}</td>
                      <td>{user.data.last_name}</td>
                      <td>{user.data.email}</td>
                      <td>
                        {new Date(
                          user.data.created_at.seconds * 1000
                        ).toLocaleString()}
                      </td>
                      {/* <td><button type='button' >delete</button>
                    <button>update</button></td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <h2>All Blogs</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nr</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image_url</th>
                <th>Created At</th>
                <th>Manage blogs</th>
              </tr>
            </thead>
            <tbody>
              {blogs &&
                blogs.map((blog, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{blog.data.title}</td>
                    <td>{blog.data.description}</td>
                    <td>
                      {" "}
                      <img
                        style={{ width: "100px", height: "50px" }}
                        src={blog.data.image}
                        alt=""
                      />{" "}
                    </td>

                    <td>{blog.data.created_at}</td>
                    <td>
                      <button type="button" onClick={() => deleteBlog(blog.id)}>
                        delete
                      </button>
                      <button type="button" onClick={() => updateBlog(blog.id)}>
                        update
                      </button>
                    </td>
                  </tr>
                ))}
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="blog title"
                    onChange={(e) => setBlogTitle(e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </td>
                <td>
                  <WidgetLoader />
                  <Widget
                    sources={[
                      "local",
                      "camera",
                      "dropbox",
                      "instagram",
                      "facebook",
                      "google_drive",
                    ]} //
                    resourceType={"image"}
                    cloudName={"dbea96pnt"}
                    uploadPreset={"rlmiq4cm"}
                    buttonText={"Upload"}
                    style={{
                      border: "none",
                      width: "120px",
                      borderRadius: "4px",
                      transition: "background-color 0.3s ease",
                      cursor: "pointer",
                    }}
                    folder={"my_folder"}
                    cropping={true}
                    multiple={true}
                    autoClose={false}
                    logging={true}
                    customPublicId={"sample"}
                    eager={"w_400,h_300,c_pad|w_260,h_200,c_crop"}
                    use_filename={true}
                    widgetStyles={{
                      palette: {
                        window: "#737373",
                        windowBorder: "#FFFFFF",
                        tabIcon: "#FF9600",
                        menuIcons: "#D7D7D8",
                        textDark: "#DEDEDE",
                        textLight: "#FFFFFF",
                        link: "#0078FF",
                        action: "#FF620C",
                        inactiveTabIcon: "#B3B3B3",
                        error: "#F44235",
                        inProgress: "#0078FF",
                        complete: "#20B832",
                        sourceBg: "#909090",
                      },
                      fonts: {
                        default: null,
                        "'Fira Sans', sans-serif": {
                          url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                          active: true,
                        },
                      },
                    }}
                    destroy={false}
                    onSuccess={(result) => {
                      const imageUrl = result.info.secure_url;
                      setUrl(result.info.secure_url);
                      console.log("Uploaded image URL:", imageUrl);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="timestamp"
                    defaultValue={timestamp}
                    onChange={handleInputChange}
                  ></input>
                </td>
                <td>
                  <button type="button" onClick={() => addNewBlog()}>
                    Add New Blog
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {monthlyUsers && (
          <div className="chart-container">
            <Bar
              data={{
                labels: monthlyData.labels,
                datasets: [
                  {
                    label: "Users",
                    data: monthlyData.data,
                    backgroundColor: " #ac2093df",
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      font: {
                        size: 20,
                        family: "sans-serif",
                      },
                    },
                  },
                  x: {
                    grid: {
                      color: "#fff",
                    },
                    ticks: {
                      font: {
                        size: 30,
                        family: "sans-serif",
                        color: "#333",
                      },
                    },
                  },
                },
                plugins: {
                  title: {
                    display: true,
                    text: "Monthly User Registrations",
                    color: "#fff",
                    font: {
                      size: 20,
                      family: "sans-serif",
                      weight: "1000",
                    },
                  },
                },
              }}
            />
            <Line
              data={{
                labels: monthlyData.labels,
                datasets: [
                  {
                    label: "Users",
                    data: monthlyData.data,
                    fill: true,
                    borderColor: "rgba(75,192,192,1)",
                    borderWidth: 0.5,
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    grid: {
                      color: "#eee",
                    },
                    ticks: {
                      font: {
                        size: 30,
                        family: "sans-serif",
                      },
                    },
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      font: {
                        size: 20,
                        family: "sans-serif",
                      },
                    },
                  },
                },
                plugins: {
                  title: {
                    display: true,
                    text: "Monthly User Registrations",
                    color: "#ffff",
                    font: {
                      size: 20,
                      family: "sans-serif",
                      weight: "1000",
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
