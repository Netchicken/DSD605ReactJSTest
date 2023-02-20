const Section = ({ props }) => {
  return (
    <div>
      <div className='row'>
        {/* <div className='col-sm'>
          <div className='appheadercitytext'>
            The Place Name is {props.Placename ? props.Placename : ""} (only
            showing for debugging)
          </div>
        </div>
        <div className='col-sm'> */}
        {/* <div className='appheadercontainer'> */}
        <div className='appheadermeaningtext'>
          {props.Meaning ? props.Meaning : ""}
        </div>
        {/* </div> */}
        {/* </div>
        <div className='col-sm'>
          <div className='appheadercontainer'>
            Hint: {props.Components ? props.Components : ""}
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Section;
