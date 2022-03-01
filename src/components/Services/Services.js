// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LanguageIcon from '@mui/icons-material/Language';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import ServiceContent from './ServiceContent'

const Services = () => {
  return (
    <div id='services' className='my-3 p-7 body-content'>
        <h1 className='text-3xl mb-4 py-2 font-bold border-b-4 border-sky-600'>Services</h1>
        <div className='flex justify-between block-p' data-aos="fade-up" data-aos-delay="50"  data-aos-duration="2000"   data-aos-easing="ease-in-out-cubic">
            <ServiceContent icon={LanguageIcon} title='Web Development' text='I build nice, fast, functional and easy to use websites and applications for individuals, groups and organisations.'/>

            <ServiceContent icon={AutoStoriesOutlinedIcon} title='Web Content Development' text='I can spice up your existing website by adding amazing contents that will keep visitors always yearning to come back.'/>

            <ServiceContent icon={ZoomInOutlinedIcon} title='SEO' text='I can make your website noticeable on search engines.'/>
        </div>
        
    </div>
  )
}

export default Services