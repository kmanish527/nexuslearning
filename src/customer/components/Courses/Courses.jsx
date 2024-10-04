import { useState } from 'react';
import { Dialog, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { XMarkIcon, FunnelIcon, PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import CoursesCard from './CoursesCard';
import { exampledata } from './../../../Data/exampledata';

const filters = [
  {
    id: 'Computer Science',
    name: 'Computer Science',
    options: [
      { value: 'C Programming', label: 'C Programming', checked: false },
      { value: 'JavaScript', label: 'JavaScript', checked: false },
    ],
  },
  {
    id: 'Data Science',
    name: 'Data Science',
    options: [
      { value: 'Python', label: 'Python', checked: false },
      { value: 'Big Data', label: 'Big Data', checked: false },
    ],
  },
  {
    id: 'Information Technology',
    name: 'Information Technology',
    options: [
      { value: 'AWS', label: 'AWS', checked: false },
      { value: 'CyberSecurity', label: 'CyberSecurity', checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Courses() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Handle filter selection
  const handleFilterChange = (sectionId, optionValue) => {
    if (selectedFilters.includes(optionValue)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== optionValue));
    } else {
      setSelectedFilters([...selectedFilters, optionValue]);
    }
  };

  // Apply filters to the exampledata
  const filteredCourses = exampledata.filter((course) =>
    selectedFilters.length === 0 || selectedFilters.includes(course.thirdLavelCategory)
  );

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className="h-5 w-5 group-data-[open]:hidden" aria-hidden="true" />
                          <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              checked={selectedFilters.includes(option.value)}
                              onChange={() => handleFilterChange(section.id, option.value)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Offered Courses</h1>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <section aria-labelledby="courses-heading" className="pb-24 pt-6">
            <h2 id="courses-heading" className="sr-only">
              Courses
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className="h-5 w-5 group-data-[open]:hidden" aria-hidden="true" />
                          <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              checked={selectedFilters.includes(option.value)}
                              onChange={() => handleFilterChange(section.id, option.value)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Course grid */}
              <div className="lg:col-span-3 w-full">
                <div className='flex flex-wrap justify-center bg-white py-5'>
                    {filteredCourses.map((item) => <CoursesCard key={item.title} courses={item} />)}
                </div>
              </div>
              </div>
          </section>
        </main>
      </div>
    </div>
  );
}

