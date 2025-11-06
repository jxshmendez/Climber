# Backend
## Setup and docs

## Setup Instructions
git clone https://github.com/jxshmendez/Climber.git
cd Climber/backend

Edit the application.properties file:
spring.datasource.url=jdbc:postgresql://localhost:5432/climberdb 
spring.datasource.username=postgres 
spring.datasource.password=yourpassword 
spring.jpa.hibernate.ddl-auto=update spring.jpa.show-sql=true

app.jwt.secret=yourSecretKey 
app.jwt.expiration=86400000

## Docs
Swagger UI is available at
http://localhost:8080/swagger-ui/index.html

Generate dependencies classpath for Javadoc:
mvn dependency:build-classpath "-Dmdep.outputFile=classpath.txt"

Generate docs:
javadoc -d docs -classpath "@classpath.txt" -sourcepath src\main\java -subpackages org.josh.climber