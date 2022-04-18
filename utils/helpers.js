export function btnClass(disabled) {
  let btnClass = ''
  if (disabled)
    btnClass =
      'w-full mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-gray-300 rounded  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none'
  else
    btnClass =
      'w-full mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none'

  return btnClass
}
