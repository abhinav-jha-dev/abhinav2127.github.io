<!-- About Organization -->
> ***Bob The Builder!***

**Haymarket Media Group** is a privately held media company headquartered in London. It has publications in the consumer, business and customer sectors, both print and online. It operates exhibitions allied to its publications, and previously on behalf of organizations such as the BBC. TMotions is a trusted service provider for the past decade.

<!-- End About Organization -->

<!-- Key Roles -->
<!-- ExperienceKey -->
###### My Roles
<!-- ResumeKey -->
**Haymarket** project brought new challenges for me. We provided them our services as a small team and later they seemed impressed with our work and dedication, and wanted us to manage their full Software Development life cycle.

During this process, I got an opportunity to work on the backend and created a Data Import mechanism for importing data from different sources and mapping them to our entity schemas. This helped them to import millions of records in batches as a background service for their clients. Let's look at the schema,

<img src ="https://raw.githubusercontent.com/abhinav2127/Gitpad/portfolio/images/Org_Haymarket_DataImport.svg" width="100%">

This is the big picture of the application, but in the background, we processed the data in batches using multiple threads, which helped us to import faster. The logger was used to log information about error and validations. We also exported Json for failed imports. I will try to explain in more detail later in my blog.
<!-- EndResumeKey -->
<!-- EndExperienceKey -->
<!-- End Key Roles -->

<!-- Key Achievements -->
###### Achievements
<!-- CVKey -->
- Formed Import Application for the generic data import from diverse sources.
- Used Abstract factory, Observer, Singleton and other design patterns with Dependency Injection to create application architecture.
- Built Windows Services, which is scheduled run on low load.
- Designed a Nuget package for common application logger.
<!-- EndCVKey -->
<!-- End Achievements -->