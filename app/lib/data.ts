import { ITask, JsonHeader } from "@/app/lib/definitions";

class FetchWrapper {
  baseURL: string;
  headers: JsonHeader

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.headers = {
      "Content-Type": "application/json"
    };
  };

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "API request failed.")
    }

    return response.json() as Promise<T>;
  }

  async get(id?: string): Promise<ITask[]> {
    const url = id ? `${this.baseURL}/${id}` : this.baseURL;
    const response = await fetch(
      url,
      { cache: "no-store" }
    );

    return this.handleResponse<ITask[]>(response)
  };

  async put(id: string, data: Partial<ITask>): Promise<ITask> {
    const response = await fetch(
      `${this.baseURL}/${id}`,
      {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(data),
      }
    );

    return this.handleResponse<ITask>(response);
  };

  async post(data: Partial<ITask>): Promise<ITask> {
    const response = await fetch(
      this.baseURL,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      }
    );

    return this.handleResponse<ITask>(response);
  }

  async delete(id: string): Promise<any> {
    const response = await fetch(
      `${this.baseURL}/${id}`,
      {
        method: "DELETE",
      }
    );

    return this.handleResponse<any>(response);
  }
};

export const fetcher = new FetchWrapper(`${process.env.BASE_URL}/tasks`);
