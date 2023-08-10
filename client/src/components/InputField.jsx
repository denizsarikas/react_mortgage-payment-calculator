

const InputField = ({ label, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type="text"
        className={`mt-1 p-2 border ${error ? 'border-red-500' : 'border-gray-300'}`}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;