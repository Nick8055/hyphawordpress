import "./value.css";

const OurValues = ({valueHeading, valueDesc}) => {
    return(
      <div className='valueContainer'>
        <div className='valueHeading'>{valueHeading}</div>
        <div className='valueDesc'>{valueDesc}</div>
      </div>
    )
  }

const ValueSection = () => {
    return(
        <div className="App">
            <div className="value-Heading">Our Core Values</div>
            <div className='valueSection'>
                <OurValues valueHeading={'Explore'} valueDesc={'The path towards achieving excellence is not easy. Be courageous and finish what you’ve undertaken with utmost determination.'}></OurValues>
                <OurValues valueHeading={'Evolve'} valueDesc={'We believe in collaborating and learning from one another. Because, excellence is driven better when you’re together.'}></OurValues>
                <OurValues valueHeading={'Encourage'} valueDesc={'Your breakthroughs at the workplace promote personal growth. But more importantly, they inspire others to grow.'}></OurValues>
                <OurValues valueHeading={'Ensure'} valueDesc={'Take accountability for your work and everything you build to ensure customer satisfaction.'}></OurValues>
            </div>
        </div>
    )
}

export default ValueSection;