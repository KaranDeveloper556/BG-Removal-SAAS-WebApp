import React from 'react'
import CustomButton from './../components/Utility/CustomButton'

const Playground = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 p-6">
      <div className="image-section flex flex-col lg:flex-row justify-center items-center gap-6">

        {/* Original Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pinimg.com/originals/9e/b4/c7/9eb4c7ef7a38270505219e671db9195b.gif"
            alt="Original"
            className="w-full lg:w-1/2 rounded shadow"
          />
          <p className="mt-4 text-lg font-medium">Original Image</p>
        </div>

        {/* Processed Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pinimg.com/originals/9e/b4/c7/9eb4c7ef7a38270505219e671db9195b.gif"
            alt="Processed"
            className="w-full lg:w-1/2 rounded shadow"
          />
          <p className="mt-4 text-lg font-medium">Processed Image</p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-0">
        <CustomButton tailwindclass={"px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"}
          value={'Try Another Image'} />
        <CustomButton
          tailwindclass={"px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"}
          value={'Download Image'} />
      </div>
    </section>
  )
}

export default Playground