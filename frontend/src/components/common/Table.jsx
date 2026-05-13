function Table({ columns, data, renderActions }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                background: "#f1f1f1",
              }}
            >
              {col.title}
            </th>
          ))}

          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
            }}
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.customerId}>
            {columns.map((col) => (
              <td
                key={col.key}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                {item[col.key]}
              </td>
            ))}

            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {renderActions(item)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;