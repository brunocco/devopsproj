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

*Este README foi elaborado para documentação completa do projeto DevOps com foco em observabilidade e monitoramento.*

