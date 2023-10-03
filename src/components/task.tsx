import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

export function Task() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Flex
      align="center"
      gap="0.75rem"
      bg="gray.400"
      w="100%"
      p="1rem"
      borderRadius="8px"
    >
      <Button bg="transparent" onClick={() => setIsChecked((state) => !state)}>
        {isChecked ? (
          <Image
            src="/checked.svg"
            alt="mark as task completed icon"
            height={24}
            width={24}
          />
        ) : (
          <Image
            src="/uncheck.svg"
            alt="mark as task completed icon"
            height={24}
            width={24}
          />
        )}
      </Button>
      <Text textDecoration={isChecked ? 'line-through' : ''}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Text>
      <Button>
        <Image src="/trash.svg" alt="delete task icon" height={24} width={24} />
      </Button>
    </Flex>
  )
}
