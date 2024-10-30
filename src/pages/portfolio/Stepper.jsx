const Stepper = () => {
  const steps = [
    { id: 1, label: "Basic Information", completed: true },
    { id: 2, label: "Professional Information", active: true },
    { id: 3, label: "Upload Documents" },
    { id: 4, label: "Bank Details" },
    { id: 5, label: "Guarantor Information" },
    { id: 6, label: "Previous or Existing Loans" },
    { id: 7, label: "Liability Performance" },
  ];

  return (
    <div className="w-72 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center mb-4">
          {/* Circle Indicator */}
          <div className="relative">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                step.completed
                  ? "bg-orange-500 border-orange-500 text-white"
                  : step.active
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {step.completed ? (
                <span>&#10003;</span> // Checkmark for completed steps
              ) : (
                <span>{step.id}</span> // Step number
              )}
            </div>

            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div className="absolute top-6 left-2 w-0.5 h-8 bg-gray-300"></div>
            )}
          </div>

          {/* Step Label */}
          <div
            className={`ml-4 ${
              step.active ? "text-orange-500 font-semibold" : "text-gray-500"
            }`}
          >
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
