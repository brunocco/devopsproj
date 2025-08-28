# Projeto DevOps: Deploy de Aplicação Full Stack em EC2 com Docker e Monitoramento Datadog

![Banner](https://raw.githubusercontent.com/seuusuario/seurepositorio/main/banner.png)  
*Projeto de infraestrutura, containers e observabilidade usando AWS EC2, Docker e Datadog.*

---

## 📝 Descrição do Projeto

Este projeto tem como objetivo demonstrar habilidades práticas de **DevOps**, **observabilidade** e **deploy de aplicações em containers**, utilizando:

- AWS EC2
- Docker & Docker Compose
- Datadog (Agente 6 para host, Agente 7 para containers)
- SQLite embutido localmente
- Frontend e Backend em containers

O projeto permitiu:

- Deploy de aplicação Full Stack (frontend + backend) em containers.
- Monitoramento completo da infraestrutura e containers.
- Coleta de métricas de CPU, memória e disco tanto do host quanto dos containers.

---

## 💡 Tecnologias Utilizadas

| Camada | Tecnologias |
|--------|-------------|
| Infraestrutura | AWS EC2, Security Groups, SSH |
| Containers | Docker, Docker Compose |
| Backend | Node.js / Python Flask (com SQLite) |
| Frontend | React / Nginx |
| Observabilidade | Datadog Agent 6 & 7, métricas de CPU, memória e disco |
| Versionamento | Git |

---

## 🚀 Passo a Passo do Projeto

### 1. Criação da EC2
- Criar instância EC2 Ubuntu 24.04.
- Configurar Security Group com portas 22 (SSH), 80 (HTTP), 3000 (Backend).
- Conectar via **Instance Connect** ou SSH.

---

### 2. Preparação do Servidor

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
sudo apt install docker-compose -y




# Projeto DevOps: Deploy de Aplicação Full Stack em EC2 com Docker e Monitoramento Datadog

Este projeto tem como objetivo demonstrar habilidades práticas de **DevOps**, **observabilidade** e **deploy de aplicações em containers**, utilizando **Docker**, **Docker Compose**, **AWS EC2** e **Datadog** para monitoramento.

---

## Descrição do Projeto

O projeto consiste em:

- Criação de um servidor EC2 na AWS.
- Deploy de uma aplicação Full Stack (Frontend + Backend) usando **Docker** e **Docker Compose**.
- Uso do **SQLite** embutido localmente para o backend.
- Configuração de monitoramento da infraestrutura e containers usando **Datadog Agent**.
- Coleta de métricas de CPU, memória e disco tanto do host quanto dos containers.

Este projeto foi essencial para testar e validar conhecimentos de **infraestrutura como código, deploy em containers, monitoramento de métricas, troubleshooting e observabilidade**.

---

## Tecnologias Utilizadas

- AWS EC2
- Docker
- Docker Compose
- Datadog (Agente 6 e Agente 7)
- SQLite (local, embutido no backend)
- Frontend (ex.: Nginx ou React)
- Backend (ex.: Node.js ou Python Flask)
- Git

---

## Passo a Passo do Projeto

### 1. Criação da EC2
- Criação de uma instância EC2 na AWS com Ubuntu 24.04.
- Configuração de **Security Group** permitindo portas 22 (SSH), 80 e 3000 (HTTP e Backend).
- Acesso via **Instance Connect** ou SSH.

### 2. Preparação do Servidor
```bash
# Atualização do servidor
sudo apt update && sudo apt upgrade -y

# Instalação do Docker
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker

# Instalação do Docker Compose
sudo apt install docker-compose -y





# Projeto DevOps com Docker, EC2 e Datadog

## Descrição do Projeto

Este projeto teve como objetivo provisionar e monitorar uma aplicação full-stack utilizando boas práticas de DevOps e Observabilidade. O backend e frontend da aplicação foram containerizados com Docker e Docker Compose, rodando em uma instância EC2, com monitoramento completo via Datadog.

A aplicação utiliza SQLite localmente para persistência de dados, permitindo testes rápidos sem necessidade de banco externo.

O projeto permitiu testar conhecimentos em:

* Provisionamento de infraestrutura em AWS EC2.
* Containerização e orquestração com Docker e Docker Compose.
* Monitoramento e métricas de containers e host com Datadog.
* Observabilidade de recursos como CPU, memória e disco.

## Passo a Passo do Projeto

1. **Criação da EC2**

   * Provisionamento de uma instância Ubuntu.
   * Acesso via `EC2 Instance Connect`.

2. **Instalação do Docker**

   ```bash
   sudo apt update
   sudo apt install docker.io -y
   sudo systemctl enable docker
   sudo systemctl start docker
   sudo usermod -aG docker $USER
   ```

3. **Instalação do Docker Compose**

   ```bash
   sudo apt install docker-compose -y
   ```

4. **Clonagem do Repositório**

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd devopsproj
   ```

5. **Criação e execução dos containers**

   ```bash
   docker-compose up -d
   ```

   * Backend e frontend rodando em containers.

6. **Instalação do Datadog Agent 6**

   * Para monitorar métricas gerais do host EC2.

7. **Instalação do Datadog Agent 7**

   * Para monitorar containers e métricas específicas.

   ```bash
   docker run -d --name dd-agent \
   -e DD_API_KEY=SEU_API_KEY \
   -e DD_SITE="us5.datadoghq.com" \
   -e DD_DOGSTATSD_NON_LOCAL_TRAFFIC=true \
   -v /var/run/docker.sock:/var/run/docker.sock:ro \
   -v /proc/:/host/proc/:ro \
   -v /sys/fs/cgroup/:/host/sys/fs/cgroup:ro \
   -v /var/lib/docker/containers:/var/lib/docker/containers:ro \
   gcr.io/datadoghq/agent:7
   ```

8. **Verificação e Dashboard no Datadog**

   * Métricas monitoradas:

     * `avg:system.cpu.user` (host)
     * `avg:system.cpu.idle` (host)
     * `avg:system.disk.user` (host)
     * `avg:system.disk.free` (host)
     * `avg:container.memory.rss`
   * Métricas dos containers de frontend e backend.
   * Criar dashboards e gráficos no Datadog Metrics Explorer para visualizar o desempenho.

## Métricas Monitoradas

* **CPU Host:** `avg:system.cpu.user`, `avg:system.cpu.idle`
* **Memória Container:** `avg:container.memory.rss`
* **Disco Host:** `avg:system.disk.user`, `avg:system.disk.free`
* **CPU Container:** `avg:system.cpu.user` (containers)

## Importância do Projeto

Este projeto foi fundamental para:

* Praticar o ciclo completo de DevOps: Infraestrutura -> Containerização -> Deploy -> Monitoramento.
* Entender a coleta de métricas e observabilidade com Datadog.
* Consolidar conhecimentos em Docker, Docker Compose e AWS EC2.
* Visualizar em tempo real o uso de recursos por host e containers.

## Observações

* É recomendado rodar apenas um agente Datadog por host para evitar conflito de métricas.
* A configuração dos agentes permite monitorar tanto host quanto containers simultaneamente.
* O SQLite embutido torna o projeto leve e fácil de testar.

---


👉 Isso renderiza um diagrama direto no GitHub, mostrando **usuário → frontend → backend → EC2 → Datadog**.

---

## 🔹 Exemplo visual (para Draw.io ou Lucidchart)
Se quiser fazer bonitão com ícones oficiais da AWS:
- Baixe o [AWS Architecture Icons](https://aws.amazon.com/architecture/icons/).
- Use **EC2** para a instância, **Containers** para frontend/backend, **Datadog logo** para monitoramento.
- Conecte com setas mostrando tráfego e métricas.

---

👉 Quer que eu já monte esse **Mermaid pronto e renderizado** para você colar no README, ou prefere um **.drawio** editável que você abre e ajusta visualmente?


*Este README foi elaborado para documentação completa do projeto DevOps com foco em observabilidade e monitoramento.*


```mermaid
graph TD
    User[👤 Usuário] -->|HTTP :8080| Frontend[🖥️ Container Frontend]
    Frontend -->|API :3000| Backend[⚙️ Container Backend + SQLite]
    Backend --> DB[(💾 SQLite Local)]

    subgraph EC2[🖥️ AWS EC2 Instance]
        Frontend
        Backend
        Agent[📡 Datadog Agent]
    end

    Agent -->|Métricas| Datadog[☁️ Datadog Cloud]


