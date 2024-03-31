import React from 'react'

export const FormField = ({ LabelName, type, name, placeholder, value,
      handleChange,
      isSurpriseMe,
      handleSurpriseMe }) => {
      return (

            <div>
                  <div className='flex items-center gap-2 mb-2'>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-900'>
                              {LabelName}
                        </label>
                        {isSurpriseMe && (

                              <button type='button' onClick={handleSurpriseMe}
                                    className='font-semibold text-xs bg-[#ECECF1] py-2 px-5 rounded-[5px] text-black'
                              >Surprise me </button>
                        )}
                  </div>
                  <input type={type} id={name} name={name} placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        required
                        className='bg-gray-50 border border-gray-300  shadow appearance-none text-gray-900 text-sm rounded-lg  w-full p-3 block outline-none  focus:ring-[#4649ff]  focus:border-[#4649ff]  focus:shadow-outline'
                  />
            </div>
      )
}
export default FormField;