import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TodoAdd = (props) => {
    const {
        className,
        toggle,
        modal,
        board,
        addTask
    } = props;

    function addItem(element) {
        let item = {
            id: board.items.length + 1,
            name: element.target.title.value,
            status: 'active',
            image: 'https://picsum.photos/300/300'
        }
        addTask(board.id, item)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <Form onSubmit={addItem}>
                    <ModalHeader toggle={toggle}>Todo Add New Item {board.header}</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="exampleEmail">Title Task</Label>
                            <Input type="text" name="title" id="title" placeholder="Task Title" />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        <Button color="primary">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    );
}

export default TodoAdd;