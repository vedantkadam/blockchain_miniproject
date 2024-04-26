import { Loader } from "@components/ui/common";
import Link from "next/link";

const lectures = ["How to init App"];

export default function Curriculum({ locked, courseState, isLoading }) {
  const statusClass =
    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full pb-12 align-middle ">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Section 1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lectures.map((lec) => (
                    <tr key={lec}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {lec}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={
                            locked
                              ? `bg-green-100 text-green-800 ${statusClass}`
                              : `bg-green-100 text-green-800 ${statusClass}`
                          }
                        >
                          {locked ? "Unlocked" : "Unlocked"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        {isLoading ? (
                          <Loader />
                        ) : locked ? (
                          <>
                            {courseState === "deactivated" && (
                              <Link href="/marketplace">
                                <a className="text-red-600 hover:text-red-900">
                                  Get Access
                                </a>
                              </Link>
                            )}
                            {courseState === "purchased" && (
                              <Link href="/faq">
                                <a className="text-yellow-500 hover:text-yellow-900">
                                  Activated
                                </a>
                              </Link>
                            )}
                          </>
                        ) : (
                          <Link href="/watch">
                            <a className="text-red-600 hover:text-red-900">
                              Watch
                            </a>
                          </Link>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <Link href="https://drive.google.com/file/d/1R0Dey3R5RPoarPYaQZWa_dBFM8RDz3FP/view?usp=sharing">
                                <a className="text-blue-600 hover:text-blue-900">
                                  View your Book
                                </a>
                              </Link>
                        
                       
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
