import { Routes, Route } from 'react-router-dom'
import Homepage from '../customer/components/pages/HomePage/Homepage'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Courses from './../customer/components/Courses/Courses';
import CourseDetails from './../customer/components/CourseDetails/CourseDetails';
import Bookmark from './../customer/components/Bookmark/Bookmark';
import Checkout from '../customer/components/Checkout/Checkout'
import MyCourses from '../customer/components/MyCourses/MyCourses'
import About from '../customer/components/pages/HomePage/AboutPage/Aboutpage'
import NotificationPage from '../customer/components/pages/NotificationPage/NotificationPage'

export default function CustomerRouters() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/Bookmark" element={<Bookmark />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/MyCourses" element={<MyCourses />} />
        <Route path="/About" element={<About />} />
        <Route path="/Notification" element={<NotificationPage />} />
      </Routes>
      <Footer />
    </div>
  )
}