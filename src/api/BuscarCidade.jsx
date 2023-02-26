import axios from "axios";

const handler = async (req, res) => {
  try {
    const { method, query } = req;

    switch (method) {
      case "GET":
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        res.status(200).json(data);
        break;

      default:
        res.status(405).json({ response: "Metodo não suportado!" });
    }
  } catch {
    res.status(500).json({ response: "Error!" });
  }
};

export default handler;
