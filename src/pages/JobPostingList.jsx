import React, { useState, useEffect } from "react";
import { Table, Button ,Icon, Label, Menu, } from "semantic-ui-react";
import JobPostingService from "../services/jobPostingService";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getPostings()
      .then((result) => setJobPostings(result.data.data));
  });
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Veren</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Detay</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPostings) => (
            <Table.Row>
              <Table.Cell>{jobPostings.employer.companyName}</Table.Cell>
              <Table.Cell>{jobPostings.jobPosition.positionName}</Table.Cell>
              <Table.Cell>{jobPostings.city.cityName}</Table.Cell>
              <Table.Cell>{jobPostings.applicationDeadline}</Table.Cell>
              <Table.Cell><Button color='orange'>Detay</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

      
    </div>
  );
}
