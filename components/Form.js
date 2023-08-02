export default function Form() {
  return (
    <form action="/create" method="post" className="grid grid-cols-1 gap-4 sm:grid-cols-5">

      <div className="sm:col-span-5">
        <label htmlFor="location" className="block mb-2">Location</label>
        <input type="text" name="location" id="location" className="w-full px-4 py-2 form-control" />
      </div>

      <div className="flex flex-col sm:col-span-1">
        <label htmlFor="min_customers_per_hour" className="block w-full mb-2 text-center">Minimum Customers per Hour</label>
        <input type="number" name="min_customers_per_hour" id="min_customers_per_hour" className="form-control" />
      </div>

      <div className="flex flex-col sm:col-span-1">
        <label htmlFor="max_customers_per_hour" className="block w-full mb-2 text-center">Maximum Customers per Hour</label>
        <input type="number" name="max_customers_per_hour" id="max_customers_per_hour" className="form-control" />
      </div>

      <div className="flex flex-col sm:col-span-1">
        <label htmlFor="average_cookies_per_sale" className="block w-full mb-2 text-center">Average Cookies per Sale</label>
        <input type="number" name="average_cookies_per_sale" id="average_cookies_per_sale" className="form-control" />
      </div>

      <div className="flex items-center justify-center sm:col-span-2">
        <button type="submit" className="w-full px-4 py-2 btn btn-primary">Create</button>
      </div>
    </form>
  )
}